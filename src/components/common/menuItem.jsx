import _ from "lodash";
export const MenuItemWithKeyValueId = (options = [], keyProp, labelProp) => (
    _.isArray(options) && options.map(option =>
        <option key={option[keyProp]} value={option[keyProp]}>
            {option[labelProp]}
        </option>
    ));