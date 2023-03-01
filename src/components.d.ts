/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ClrAlert {
        "kind": "info" | "success" | "warning" | "error";
        "text": string;
    }
    interface ClrAlertCenter {
        "location": "top" | "bottom";
    }
    interface ClrBlockExpand {
        "bgcolor": string;
        "bgimg": string;
        "show": any;
    }
    interface ClrCard {
        "bgcolor": string;
        "bgimg": string;
        "href": string;
        "size": "quater" | "third" | "half" | "full" | "";
        "src": string;
        "subtitle": string;
        "title": string;
        "url": string;
    }
    interface ClrCarousel {
        "size": string;
    }
    interface ClrDropLink {
        "href": string;
        "target": string;
        "text": string;
        "url": string;
    }
    interface ClrExpandLink {
        "href": string;
        "text": string;
        "url": string;
    }
    interface ClrFooter {
    }
    interface ClrHeader {
        "src": string;
    }
    interface ClrIcon {
        "kind": any;
        "size": "tiny" | "small" | "medium" | "large" | "full";
    }
    interface ClrIconBtn {
        "ariaLabel": string;
        "charCount": () => Promise<void>;
        "href": string;
        "target": string;
        "text": string;
        "url": string;
        "width": any;
    }
    interface ClrLeftDrawer {
        "drawerClose": () => Promise<void>;
        "drawerMove": () => Promise<void>;
        "drawerOpen": () => Promise<void>;
    }
    interface ClrNav {
        "drawerCheck": () => Promise<void>;
        "drawerClose": () => Promise<void>;
        "drawerMove": () => Promise<void>;
        "drawerOpen": () => Promise<void>;
    }
    interface ClrNavBtn {
    }
    interface ClrPill {
    }
    interface ClrPnBtn {
    }
    interface ClrPopupBtn {
        "kind": "info" | "success" | "error";
        "text": string;
    }
    interface ClrSideMenu {
        "expanded": boolean;
        "hidden": boolean;
        "hideMove": boolean;
        "linkWidthValue": any;
        "side": string;
        "size": string;
    }
    interface ClrSlide {
        "bgcolor": string;
        "bgimg": string;
        "breakpoint": string;
        "justify": string;
        "title": string;
    }
    interface ClrWheelUi {
    }
}
export interface ClrHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLClrHeaderElement;
}
export interface ClrIconBtnCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLClrIconBtnElement;
}
export interface ClrNavCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLClrNavElement;
}
declare global {
    interface HTMLClrAlertElement extends Components.ClrAlert, HTMLStencilElement {
    }
    var HTMLClrAlertElement: {
        prototype: HTMLClrAlertElement;
        new (): HTMLClrAlertElement;
    };
    interface HTMLClrAlertCenterElement extends Components.ClrAlertCenter, HTMLStencilElement {
    }
    var HTMLClrAlertCenterElement: {
        prototype: HTMLClrAlertCenterElement;
        new (): HTMLClrAlertCenterElement;
    };
    interface HTMLClrBlockExpandElement extends Components.ClrBlockExpand, HTMLStencilElement {
    }
    var HTMLClrBlockExpandElement: {
        prototype: HTMLClrBlockExpandElement;
        new (): HTMLClrBlockExpandElement;
    };
    interface HTMLClrCardElement extends Components.ClrCard, HTMLStencilElement {
    }
    var HTMLClrCardElement: {
        prototype: HTMLClrCardElement;
        new (): HTMLClrCardElement;
    };
    interface HTMLClrCarouselElement extends Components.ClrCarousel, HTMLStencilElement {
    }
    var HTMLClrCarouselElement: {
        prototype: HTMLClrCarouselElement;
        new (): HTMLClrCarouselElement;
    };
    interface HTMLClrDropLinkElement extends Components.ClrDropLink, HTMLStencilElement {
    }
    var HTMLClrDropLinkElement: {
        prototype: HTMLClrDropLinkElement;
        new (): HTMLClrDropLinkElement;
    };
    interface HTMLClrExpandLinkElement extends Components.ClrExpandLink, HTMLStencilElement {
    }
    var HTMLClrExpandLinkElement: {
        prototype: HTMLClrExpandLinkElement;
        new (): HTMLClrExpandLinkElement;
    };
    interface HTMLClrFooterElement extends Components.ClrFooter, HTMLStencilElement {
    }
    var HTMLClrFooterElement: {
        prototype: HTMLClrFooterElement;
        new (): HTMLClrFooterElement;
    };
    interface HTMLClrHeaderElement extends Components.ClrHeader, HTMLStencilElement {
    }
    var HTMLClrHeaderElement: {
        prototype: HTMLClrHeaderElement;
        new (): HTMLClrHeaderElement;
    };
    interface HTMLClrIconElement extends Components.ClrIcon, HTMLStencilElement {
    }
    var HTMLClrIconElement: {
        prototype: HTMLClrIconElement;
        new (): HTMLClrIconElement;
    };
    interface HTMLClrIconBtnElement extends Components.ClrIconBtn, HTMLStencilElement {
    }
    var HTMLClrIconBtnElement: {
        prototype: HTMLClrIconBtnElement;
        new (): HTMLClrIconBtnElement;
    };
    interface HTMLClrLeftDrawerElement extends Components.ClrLeftDrawer, HTMLStencilElement {
    }
    var HTMLClrLeftDrawerElement: {
        prototype: HTMLClrLeftDrawerElement;
        new (): HTMLClrLeftDrawerElement;
    };
    interface HTMLClrNavElement extends Components.ClrNav, HTMLStencilElement {
    }
    var HTMLClrNavElement: {
        prototype: HTMLClrNavElement;
        new (): HTMLClrNavElement;
    };
    interface HTMLClrNavBtnElement extends Components.ClrNavBtn, HTMLStencilElement {
    }
    var HTMLClrNavBtnElement: {
        prototype: HTMLClrNavBtnElement;
        new (): HTMLClrNavBtnElement;
    };
    interface HTMLClrPillElement extends Components.ClrPill, HTMLStencilElement {
    }
    var HTMLClrPillElement: {
        prototype: HTMLClrPillElement;
        new (): HTMLClrPillElement;
    };
    interface HTMLClrPnBtnElement extends Components.ClrPnBtn, HTMLStencilElement {
    }
    var HTMLClrPnBtnElement: {
        prototype: HTMLClrPnBtnElement;
        new (): HTMLClrPnBtnElement;
    };
    interface HTMLClrPopupBtnElement extends Components.ClrPopupBtn, HTMLStencilElement {
    }
    var HTMLClrPopupBtnElement: {
        prototype: HTMLClrPopupBtnElement;
        new (): HTMLClrPopupBtnElement;
    };
    interface HTMLClrSideMenuElement extends Components.ClrSideMenu, HTMLStencilElement {
    }
    var HTMLClrSideMenuElement: {
        prototype: HTMLClrSideMenuElement;
        new (): HTMLClrSideMenuElement;
    };
    interface HTMLClrSlideElement extends Components.ClrSlide, HTMLStencilElement {
    }
    var HTMLClrSlideElement: {
        prototype: HTMLClrSlideElement;
        new (): HTMLClrSlideElement;
    };
    interface HTMLClrWheelUiElement extends Components.ClrWheelUi, HTMLStencilElement {
    }
    var HTMLClrWheelUiElement: {
        prototype: HTMLClrWheelUiElement;
        new (): HTMLClrWheelUiElement;
    };
    interface HTMLElementTagNameMap {
        "clr-alert": HTMLClrAlertElement;
        "clr-alert-center": HTMLClrAlertCenterElement;
        "clr-block-expand": HTMLClrBlockExpandElement;
        "clr-card": HTMLClrCardElement;
        "clr-carousel": HTMLClrCarouselElement;
        "clr-drop-link": HTMLClrDropLinkElement;
        "clr-expand-link": HTMLClrExpandLinkElement;
        "clr-footer": HTMLClrFooterElement;
        "clr-header": HTMLClrHeaderElement;
        "clr-icon": HTMLClrIconElement;
        "clr-icon-btn": HTMLClrIconBtnElement;
        "clr-left-drawer": HTMLClrLeftDrawerElement;
        "clr-nav": HTMLClrNavElement;
        "clr-nav-btn": HTMLClrNavBtnElement;
        "clr-pill": HTMLClrPillElement;
        "clr-pn-btn": HTMLClrPnBtnElement;
        "clr-popup-btn": HTMLClrPopupBtnElement;
        "clr-side-menu": HTMLClrSideMenuElement;
        "clr-slide": HTMLClrSlideElement;
        "clr-wheel-ui": HTMLClrWheelUiElement;
    }
}
declare namespace LocalJSX {
    interface ClrAlert {
        "kind"?: "info" | "success" | "warning" | "error";
        "text"?: string;
    }
    interface ClrAlertCenter {
        "location"?: "top" | "bottom";
    }
    interface ClrBlockExpand {
        "bgcolor"?: string;
        "bgimg"?: string;
        "show"?: any;
    }
    interface ClrCard {
        "bgcolor"?: string;
        "bgimg"?: string;
        "href"?: string;
        "size"?: "quater" | "third" | "half" | "full" | "";
        "src"?: string;
        "subtitle"?: string;
        "title"?: string;
        "url"?: string;
    }
    interface ClrCarousel {
        "size"?: string;
    }
    interface ClrDropLink {
        "href"?: string;
        "target"?: string;
        "text"?: string;
        "url"?: string;
    }
    interface ClrExpandLink {
        "href"?: string;
        "text"?: string;
        "url"?: string;
    }
    interface ClrFooter {
    }
    interface ClrHeader {
        "onElmWidth"?: (event: ClrHeaderCustomEvent<any>) => void;
        "src"?: string;
    }
    interface ClrIcon {
        "kind"?: any;
        "size"?: "tiny" | "small" | "medium" | "large" | "full";
    }
    interface ClrIconBtn {
        "ariaLabel"?: string;
        "href"?: string;
        "onLinkWidth"?: (event: ClrIconBtnCustomEvent<any>) => void;
        "target"?: string;
        "text"?: string;
        "url"?: string;
        "width"?: any;
    }
    interface ClrLeftDrawer {
    }
    interface ClrNav {
        "onMobileState"?: (event: ClrNavCustomEvent<boolean>) => void;
        "onOpenCheck"?: (event: ClrNavCustomEvent<boolean>) => void;
    }
    interface ClrNavBtn {
    }
    interface ClrPill {
    }
    interface ClrPnBtn {
    }
    interface ClrPopupBtn {
        "kind"?: "info" | "success" | "error";
        "text"?: string;
    }
    interface ClrSideMenu {
        "expanded"?: boolean;
        "hidden"?: boolean;
        "hideMove"?: boolean;
        "linkWidthValue"?: any;
        "side"?: string;
        "size"?: string;
    }
    interface ClrSlide {
        "bgcolor"?: string;
        "bgimg"?: string;
        "breakpoint"?: string;
        "justify"?: string;
        "title"?: string;
    }
    interface ClrWheelUi {
    }
    interface IntrinsicElements {
        "clr-alert": ClrAlert;
        "clr-alert-center": ClrAlertCenter;
        "clr-block-expand": ClrBlockExpand;
        "clr-card": ClrCard;
        "clr-carousel": ClrCarousel;
        "clr-drop-link": ClrDropLink;
        "clr-expand-link": ClrExpandLink;
        "clr-footer": ClrFooter;
        "clr-header": ClrHeader;
        "clr-icon": ClrIcon;
        "clr-icon-btn": ClrIconBtn;
        "clr-left-drawer": ClrLeftDrawer;
        "clr-nav": ClrNav;
        "clr-nav-btn": ClrNavBtn;
        "clr-pill": ClrPill;
        "clr-pn-btn": ClrPnBtn;
        "clr-popup-btn": ClrPopupBtn;
        "clr-side-menu": ClrSideMenu;
        "clr-slide": ClrSlide;
        "clr-wheel-ui": ClrWheelUi;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "clr-alert": LocalJSX.ClrAlert & JSXBase.HTMLAttributes<HTMLClrAlertElement>;
            "clr-alert-center": LocalJSX.ClrAlertCenter & JSXBase.HTMLAttributes<HTMLClrAlertCenterElement>;
            "clr-block-expand": LocalJSX.ClrBlockExpand & JSXBase.HTMLAttributes<HTMLClrBlockExpandElement>;
            "clr-card": LocalJSX.ClrCard & JSXBase.HTMLAttributes<HTMLClrCardElement>;
            "clr-carousel": LocalJSX.ClrCarousel & JSXBase.HTMLAttributes<HTMLClrCarouselElement>;
            "clr-drop-link": LocalJSX.ClrDropLink & JSXBase.HTMLAttributes<HTMLClrDropLinkElement>;
            "clr-expand-link": LocalJSX.ClrExpandLink & JSXBase.HTMLAttributes<HTMLClrExpandLinkElement>;
            "clr-footer": LocalJSX.ClrFooter & JSXBase.HTMLAttributes<HTMLClrFooterElement>;
            "clr-header": LocalJSX.ClrHeader & JSXBase.HTMLAttributes<HTMLClrHeaderElement>;
            "clr-icon": LocalJSX.ClrIcon & JSXBase.HTMLAttributes<HTMLClrIconElement>;
            "clr-icon-btn": LocalJSX.ClrIconBtn & JSXBase.HTMLAttributes<HTMLClrIconBtnElement>;
            "clr-left-drawer": LocalJSX.ClrLeftDrawer & JSXBase.HTMLAttributes<HTMLClrLeftDrawerElement>;
            "clr-nav": LocalJSX.ClrNav & JSXBase.HTMLAttributes<HTMLClrNavElement>;
            "clr-nav-btn": LocalJSX.ClrNavBtn & JSXBase.HTMLAttributes<HTMLClrNavBtnElement>;
            "clr-pill": LocalJSX.ClrPill & JSXBase.HTMLAttributes<HTMLClrPillElement>;
            "clr-pn-btn": LocalJSX.ClrPnBtn & JSXBase.HTMLAttributes<HTMLClrPnBtnElement>;
            "clr-popup-btn": LocalJSX.ClrPopupBtn & JSXBase.HTMLAttributes<HTMLClrPopupBtnElement>;
            "clr-side-menu": LocalJSX.ClrSideMenu & JSXBase.HTMLAttributes<HTMLClrSideMenuElement>;
            "clr-slide": LocalJSX.ClrSlide & JSXBase.HTMLAttributes<HTMLClrSlideElement>;
            "clr-wheel-ui": LocalJSX.ClrWheelUi & JSXBase.HTMLAttributes<HTMLClrWheelUiElement>;
        }
    }
}
