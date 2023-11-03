import React, { useContext, useEffect, useRef, useState } from "react";
import { Modal, Button, Divider, Row, Space, Spin, Col } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import ConnectionProvider from "@/ConnectionProvider";
import TextArea from "antd/lib/input/TextArea";
import showErrorDialog from "@/ui/ActionErrorDialog";

type TranslationModalProps = {
  visible: boolean;
  model: string;
  id: number;
  field: string;
  onCloseModal: () => void;
  onSubmitSucceed: () => void;
};

type Lang = {
  code: string;
  name: string;
};

type ValuesForLangs = {
  [key: string]: string;
};

export const TranslationModal = (props: TranslationModalProps) => {
  const { visible, onCloseModal, model, id, field, onSubmitSucceed } = props;

  const { modalWidth } = useWindowDimensions();
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const [langs, setLangs] = useState<Lang[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [valuesForLangs, setValuesForLangs] = useState<ValuesForLangs>({});

  const originalValuesForLangs = useRef<ValuesForLangs>();

  useEffect(() => {
    if (visible) {
      fetchData();
    } else {
      setValuesForLangs({});
    }
  }, [visible]);

  async function fetchData() {
    setIsLoading(true);

    try {
      const langs = await getLangs();
      await getValuesForLangs(langs);
    } catch (err) {
      showErrorDialog(err as any);
    }

    setIsLoading(false);
  }

  async function getLangs() {
    const results: any[] = (await ConnectionProvider.getHandler().search({
      params: [["translatable", "=", "1"]],
      fieldsToRetrieve: ["code", "name"],
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
          fieldsToRetrieve: [field],
          context: { lang: lang.code },
        })
      )[0];
      retrievedValuesForLang[lang.code] = retrievedValue[field] || "";
    }

    originalValuesForLangs.current = retrievedValuesForLang;
    setValuesForLangs(retrievedValuesForLang);
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
              disabled={submitLoading}
            />
          </Col>
        </Row>
      );
    });
  }

  async function onSubmit() {
    setSubmitLoading(true);

    try {
      for (const langCode of Object.keys(valuesForLangs)) {
        if (
          valuesForLangs[langCode] !== originalValuesForLangs.current![langCode]
        ) {
          await ConnectionProvider.getHandler().update({
            model,
            id,
            values: { [field]: valuesForLangs[langCode] },
            context: {
              lang: langCode,
            },
            fields: {},
          });
        }
      }
    } catch (err) {
      showErrorDialog(err as any);
    }

    setSubmitLoading(false);
    onSubmitSucceed();
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
            <Button
              icon={<CloseOutlined />}
              onClick={onCloseModal}
              disabled={submitLoading}
            >
              {t("cancel")}
            </Button>
            <Button
              icon={submitLoading ? <LoadingOutlined /> : <CheckOutlined />}
              disabled={submitLoading}
              onClick={onSubmit}
              style={{ marginLeft: 15 }}
              type="primary"
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
      open={visible}
      closable={true}
      onCancel={onCloseModal}
      footer={null}
      destroyOnClose
      maskClosable={false}
    >
      {content()}
    </Modal>
  );
};
