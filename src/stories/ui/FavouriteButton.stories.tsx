import React from "react";

import FavouriteButton from "../../ui/FavouriteButton";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/UI/FavouriteButton",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <FavouriteButton />
    </LocaleProvider>
  );
};
