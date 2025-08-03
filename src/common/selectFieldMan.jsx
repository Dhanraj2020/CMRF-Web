import { useRef } from "react";
import { Form } from "react-bootstrap";

export const SelectFieldMan = ({ label, ...props }) => {
  const { className } = props;
  let labelClass = 'label-name block';
  let mandatoryClass = (props.mandatory === "no") ? '' : ' mandatory-after';
  labelClass += mandatoryClass;
  let ddDisabled = props.dddisabled || props.ddDisabled;
  const element = useRef()
  const handleOnChange = (e) => {
    if (!props.disabled) {
      props.onChange(e);
    } else {
      e.preventDefault()
    }
  }
  return (
    <Form className={className}>
      <label className={labelClass}>{label}</label>
      <Form.Group>
        <Form.Control as="select"
          {...props} className="form-select"
          ref={element}
          onChange={(e) => handleOnChange(e)}
        >
          <option value="" disabled={(ddDisabled === "no") ? false : true}>Select</option>
          {props.dataarray || props.dataArray}
        </Form.Control>
        {(props.error && props.error[props.name]) ? <span className="error">{props.error[props.name]}</span> : null}
      </Form.Group>
    </Form>
  );
};