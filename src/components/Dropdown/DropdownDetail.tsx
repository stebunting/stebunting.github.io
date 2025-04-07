// Requirements
import React, { ElementType, ReactElement } from "react";

// Style
import css from "./Dropdown.module.less";

interface Props {
  item: {
    name: string;
  };
  isOpeningOrClosing: boolean;
  visible: boolean;
  leaving: boolean;
  DetailElement: ElementType;
}

function DropdownDetail(props: Props): ReactElement {
  const { item, isOpeningOrClosing, visible, leaving, DetailElement } = props;

  const detailClasses = [css.detailElement];
  if (visible) {
    if (isOpeningOrClosing) {
      detailClasses.push(css.visible);
    } else {
      detailClasses.push(css.entering);
    }
  }
  if (leaving && !isOpeningOrClosing) {
    detailClasses.push(css.leaving);
  }

  return (
    <DetailElement
      data={item}
      key={`${item.name}Detail`}
      dropdownClasses={detailClasses.join(" ")}
    />
  );
}

export default DropdownDetail;
