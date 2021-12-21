import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Divider, Row, Space, Spin, Col } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import ConnectionProvider from "@/ConnectionProvider";
import TextArea from "antd/lib/input/TextArea";

type TranslationModalProps = {
  visible: boolean;
  model: string;
  id: number;
  field: string;
  onCloseModal: () => void;
};

type Lang = {
  code: string;
  name: string;
};

type ValuesForLangs = {
  [key: string]: string;
};

export const TranslationModal = (props: TranslationModalProps) => {
  const { visible, onCloseModal: onCloseModalProps, model, id, field } = props;

  const { modalWidth } = useWindowDimensions();
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const [langs, setLangs] = useState<Lang[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [valuesForLangs, setValuesForLangs] = useState<ValuesForLangs>({});

  useEffect(() => {
    if (visible) {
      fetchData();
    }
  }, [visible]);

  async function fetchData() {
    setIsLoading(true);

    const langs = await getLangs();
    await getValuesForLangs(langs);

    setIsLoading(false);
  }

  async function getLangs() {
    const results: any[] = (await ConnectionProvider.getHandler().search({
      params: [["translatable", "=", "1"]],
      fields: ["code", "name"],
      model: "res.lang",
    })) as any;

    const langs = results.map((item: any) => {
      return {
        code: item.code,
        name: item.name,
      };
    });

    setLangs?.(langs);
    return langs;
  }

  async function getValuesForLangs(langs: Lang[]) {
    const retrievedValuesForLang: ValuesForLangs = {};

    for (const lang of langs) {
      const retrievedValue = (
        await ConnectionProvider.getHandler().readObjects({
          model,
          ids: [id],
          fields: [field],
          context: { lang: lang.code },
        })
      )[0];
      retrievedValuesForLang[lang.code] = retrievedValue[field] || "";
    }

    setValuesForLangs(retrievedValuesForLang);
  }

  async function onCloseModal() {
    await new Promise((resolve) => setTimeout(resolve, 5));
    onCloseModalProps();
  }

  function getInputsForLangs() {
    return langs.map((lang: Lang, i: number) => {
      return (
        <Row key={i} style={{ paddingBottom: 20 }}>
          <Col flex="8rem" style={{ paddingRight: 10 }}>
            {lang.name}
          </Col>
          <Col flex="auto">
            <TextArea
              rows={4}
              value={valuesForLangs[lang.code] || ""}
              onChange={(event: any) => {
                setValuesForLangs({
                  ...valuesForLangs,
                  [lang.code]: event.target.value,
                });
              }}
            />
          </Col>
        </Row>
      );
    });
  }

  function content() {
    if (isLoading) {
      return <Spin />;
    }

    return (
      <>
        {getInputsForLangs()}
        <Divider />
        <Row justify="end">
          <Space>
            <Button icon={<CloseOutlined />} onClick={onCloseModal}>
              {t("cancel")}
            </Button>
            <Button
              icon={<CheckOutlined />}
              onClick={onCloseModal}
              style={{ marginLeft: 15 }}
            >
              {t("ok")}
            </Button>
          </Space>
        </Row>
      </>
    );
  }

  return (
    <Modal
      title={t("translate")}
      centered
      width={modalWidth}
      visible={visible}
      closable={true}
      onCancel={onCloseModal}
      footer={null}
      destroyOnClose
    >
      {content()}
    </Modal>
  );
};
