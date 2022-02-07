import {
    atom,
    selector
} from "recoil";

export const fontSizeState = atom({
    key: 'fontSizeState',
    default: 14,
});

// atom을 보면서 값을 변경을 취해서 보여주는 애
export const fontSizeLabelState = selector({
    key: 'fontSizeLabelState',
    get: ({
        get
    }) => {
        const fontSize = get(fontSizeState);
        const unit = 'px';

        return `${fontSize}${unit}`;
    },
});