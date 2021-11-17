import React from 'react';

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
import { Component } from "react/cjs/react.production.min";
import { ButtonColor } from './ButtonColor.styles';

library.add(faShoppingCart)
class Button extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        if (this.props.disableShadow) {
            return (
                <ButtonDisableShadow>
                    <h1>Default</h1>
                </ButtonDisableShadow>
            )
        } else if (this.props.variant === "outline") {
            return (
                <ButtonOutline>
                    <h1>Default</h1>
                </ButtonOutline>
            )
        } else if (this.props.variant === "text") {
            return (
                <ButtonText>
                    <h1>Default</h1>
                </ButtonText>
            )
        } else if (this.props.disabled) {
            return (
                <ButtonDisabled>
                    <h1>Default</h1>
                </ButtonDisabled>
            )
        } else if (this.props.icon) {
            if (this.props.start) {
                return (
                    <ButtonIcon start>
                        <span>
                            <FontAwesomeIcon icon={"shopping-cart"} size="2x" />
                        </span>
                        <h1>Default</h1>
                    </ButtonIcon>
                )
            } else if (this.props.end) {
                return (
                    <ButtonIcon end>
                        <h1>Default</h1><span>
                            <FontAwesomeIcon icon={"shopping-cart"} size="2x" />
                        </span>
                    </ButtonIcon>
                )
            }
        } else if (this.props.icon) {
            return (
                <ButtonIcon>
                    <h1>Default</h1>
                </ButtonIcon>
            )
        } else if (this.props.color) {
            return (
                <ButtonColor color={this.props.color}>
                    <h1>Default</h1>
                </ButtonColor>
            )
        } else if (this.props.size) {
            return (
                <ButtonSize size={this.props.size}>
                    <h1>Default</h1>
                </ButtonSize>
            )

        } else if (this.props.size) {
            return (
                <ButtonSize>
                    <h1>Default</h1>
                </ButtonSize>
            )
        } else if (this.props.variant && this.props.disabled) {
            return (
                <ButtonDisabledText>
                    <h1>Default</h1>
                </ButtonDisabledText>
            )
        } else {
            return (
                <ButtonDefault>
                    <h1>Default</h1>
                </ButtonDefault>
            )
        }
    }
}

export default Button