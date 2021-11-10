import { ButtonDefault } from "./Button.styles";
import { ButtonDisableShadow } from "./ButtonDisableShadow.styles";
import { ButtonOutline } from "./ButtonOutline.styles";
import { ButtonText } from "./ButtonText.styles";
import { ButtonDisabled } from "./ButtonDisabled.styles";
import { ButtonDisabledText } from "./ButtonDisabledText.styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ButtonIcon } from "./ButtonIcon.styles";
import { ButtonSize } from "./ButtonSize.styles";

library.add(faShoppingCart)

const Button = ({ variant, disableShadow, disabled, startIcon, endIcon, size, color }) => {
    return (
        <div>
            <p>&#60;Button /&#62;</p>
            <ButtonDefault>
                <h1>Default</h1>
            </ButtonDefault>
            <ButtonOutline>
                <h1>Default</h1>
            </ButtonOutline>
            <ButtonText>
                <h1>Default</h1>
            </ButtonText>
            <ButtonDisableShadow>
                <h1>Default</h1>
            </ButtonDisableShadow>
            <ButtonDisabled>
                <h1>Disabled</h1>
            </ButtonDisabled>
            <ButtonDisabledText>
                <h1>Disabled</h1>
            </ButtonDisabledText>
            <ButtonIcon>
                <span>
                    <FontAwesomeIcon icon={"shopping-cart"} size="2x" />
                </span>
                <h1>Default</h1>
            </ButtonIcon>
            <ButtonSize>
                <h1>Default</h1>
            </ButtonSize>
        </div>
    )
}

export default Button