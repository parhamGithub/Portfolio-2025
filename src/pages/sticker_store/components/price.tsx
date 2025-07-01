import { NumberFormatBase, useNumericFormat, type NumericFormatProps } from "react-number-format";

const persianNumeral = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

type CustomNumeralNumericFormatProps = NumericFormatProps;

function CustomNumeralNumericFormat(props: CustomNumeralNumericFormatProps) {
  const { format, removeFormatting, ...rest } = useNumericFormat(props);

  const _format = (val: string) => {
    const _val = format(val);
    return _val.replace(/\d/g, ($1) => persianNumeral[Number($1)]);
  };

  const _removeFormatting = (val: string) => {
    const _val = val.replace(new RegExp(persianNumeral.join("|"), "g"), ($1) =>
      persianNumeral.indexOf($1).toString()
    );

    return removeFormatting(_val);
  };

  return (
    <NumberFormatBase
      displayType="text"
      format={_format}
      removeFormatting={_removeFormatting}
      {...rest}
    />
  );
}

export default CustomNumeralNumericFormat;