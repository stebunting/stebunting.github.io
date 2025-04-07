// Requirements
import React, {
  useState,
  useRef,
  useLayoutEffect,
  ReactElement,
  ElementType,
} from "react";

// Components
import DropdownDetail from "./DropdownDetail";

// Style
import css from "./Dropdown.module.less";

interface Props {
  data: Array<{
    name: string;
  }>;
  DetailElement: ElementType;
  ButtonElement: ElementType;
}

function Dropdown(props: Props): ReactElement {
  const { data, DetailElement, ButtonElement } = props;

  const [visibleElement, setVisibleElement] = useState(data[0].name);
  const [leavingElement, setLeavingElement] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeningOrClosing, setIsOpeningOrClosing] = useState(false);

  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    function windowUpdated() {
      if (ref.current) setElementHeight(ref.current.scrollHeight);
    }
    window.addEventListener("resize", windowUpdated);
    windowUpdated();

    return () => window.removeEventListener("resize", windowUpdated);
  });

  function handleClick(
    event:
      | React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement | HTMLButtonElement>,
  ) {
    let id = "";
    let updateState = true;
    if (event.currentTarget.id.includes("Button")) {
      id = event.currentTarget.id.replace("Button", "");
    } else if (event.currentTarget.id.includes("Link")) {
      updateState = false;
    } else {
      id = visibleElement;
    }

    if (updateState) {
      const opening = !isOpen;
      const closing = isOpen && visibleElement === id;
      const newElement = visibleElement === id ? visibleElement : id;
      const leaving = closing ? "" : leavingElement;

      setIsOpeningOrClosing(opening || closing);
      setIsOpen(closing || opening ? !isOpen : isOpen);
      setLeavingElement(
        newElement !== visibleElement ? visibleElement : leaving,
      );
      setVisibleElement(newElement);
    }
  }

  const classes = [css.detail];
  if (isOpen != null) {
    if (isOpen) classes.push(css.open);
    if (!isOpen) classes.push(css.closed);
  }

  return (
    <>
      <div
        className={classes.join(" ")}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === " ") handleClick(event);
        }}
        role="button"
        tabIndex={0}
        ref={ref}
        style={{ height: isOpen ? elementHeight : 0 }}
      >
        {data.map((item) => (
          <DropdownDetail
            key={`${item.name}Detail`}
            item={item}
            isOpeningOrClosing={isOpeningOrClosing}
            visible={item.name === visibleElement}
            leaving={item.name === leavingElement}
            DetailElement={DetailElement}
          />
        ))}
      </div>
      <ButtonElement
        data={data.map((item) => item.name)}
        handleClick={handleClick}
      />
    </>
  );
}

export default Dropdown;
