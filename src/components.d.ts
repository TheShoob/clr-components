/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ClrAlert {
        "kind": "info" | "success" | "error";
        "text": string;
    }
    interface ClrCarousel {
    }
    interface ClrDropExpand {
        "href": string;
        "text": string;
    }
    interface ClrDropLink {
        "href": string;
        "text": string;
    }
    interface ClrFooter {
    }
    interface ClrHeader {
        "src": string;
    }
    interface ClrIconBtn {
        "text": string;
    }
    interface ClrLeftDrawer {
        "drawerClose": () => Promise<void>;
        "drawerMove": () => Promise<void>;
        "drawerOpen": () => Promise<void>;
    }
    interface ClrNavBtn {
    }
    interface ClrPnBtn {
    }
    interface ClrPopupBtn {
        "kind": "info" | "success" | "error";
        "text": string;
    }
    interface ClrTopNav {
    }
    interface ClrUtilIcn {
        "kind": "info" | "success" | "error";
    }
    interface ClrWheelUi {
    }
}
declare global {
    interface HTMLClrAlertElement extends Components.ClrAlert, HTMLStencilElement {
    }
    var HTMLClrAlertElement: {
        prototype: HTMLClrAlertElement;
        new (): HTMLClrAlertElement;
    };
    interface HTMLClrCarouselElement extends Components.ClrCarousel, HTMLStencilElement {
    }
    var HTMLClrCarouselElement: {
        prototype: HTMLClrCarouselElement;
        new (): HTMLClrCarouselElement;
    };
    interface HTMLClrDropExpandElement extends Components.ClrDropExpand, HTMLStencilElement {
    }
    var HTMLClrDropExpandElement: {
        prototype: HTMLClrDropExpandElement;
        new (): HTMLClrDropExpandElement;
    };
    interface HTMLClrDropLinkElement extends Components.ClrDropLink, HTMLStencilElement {
    }
    var HTMLClrDropLinkElement: {
        prototype: HTMLClrDropLinkElement;
        new (): HTMLClrDropLinkElement;
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
    interface HTMLClrNavBtnElement extends Components.ClrNavBtn, HTMLStencilElement {
    }
    var HTMLClrNavBtnElement: {
        prototype: HTMLClrNavBtnElement;
        new (): HTMLClrNavBtnElement;
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
    interface HTMLClrTopNavElement extends Components.ClrTopNav, HTMLStencilElement {
    }
    var HTMLClrTopNavElement: {
        prototype: HTMLClrTopNavElement;
        new (): HTMLClrTopNavElement;
    };
    interface HTMLClrUtilIcnElement extends Components.ClrUtilIcn, HTMLStencilElement {
    }
    var HTMLClrUtilIcnElement: {
        prototype: HTMLClrUtilIcnElement;
        new (): HTMLClrUtilIcnElement;
    };
    interface HTMLClrWheelUiElement extends Components.ClrWheelUi, HTMLStencilElement {
    }
    var HTMLClrWheelUiElement: {
        prototype: HTMLClrWheelUiElement;
        new (): HTMLClrWheelUiElement;
    };
    interface HTMLElementTagNameMap {
        "clr-alert": HTMLClrAlertElement;
        "clr-carousel": HTMLClrCarouselElement;
        "clr-drop-expand": HTMLClrDropExpandElement;
        "clr-drop-link": HTMLClrDropLinkElement;
        "clr-footer": HTMLClrFooterElement;
        "clr-header": HTMLClrHeaderElement;
        "clr-icon-btn": HTMLClrIconBtnElement;
        "clr-left-drawer": HTMLClrLeftDrawerElement;
        "clr-nav-btn": HTMLClrNavBtnElement;
        "clr-pn-btn": HTMLClrPnBtnElement;
        "clr-popup-btn": HTMLClrPopupBtnElement;
        "clr-top-nav": HTMLClrTopNavElement;
        "clr-util-icn": HTMLClrUtilIcnElement;
        "clr-wheel-ui": HTMLClrWheelUiElement;
    }
}
declare namespace LocalJSX {
    interface ClrAlert {
        "kind"?: "info" | "success" | "error";
        "text"?: string;
    }
    interface ClrCarousel {
    }
    interface ClrDropExpand {
        "href"?: string;
        "text"?: string;
    }
    interface ClrDropLink {
        "href"?: string;
        "text"?: string;
    }
    interface ClrFooter {
    }
    interface ClrHeader {
        "src"?: string;
    }
    interface ClrIconBtn {
        "text"?: string;
    }
    interface ClrLeftDrawer {
    }
    interface ClrNavBtn {
    }
    interface ClrPnBtn {
    }
    interface ClrPopupBtn {
        "kind"?: "info" | "success" | "error";
        "text"?: string;
    }
    interface ClrTopNav {
    }
    interface ClrUtilIcn {
        "kind"?: "info" | "success" | "error";
    }
    interface ClrWheelUi {
    }
    interface IntrinsicElements {
        "clr-alert": ClrAlert;
        "clr-carousel": ClrCarousel;
        "clr-drop-expand": ClrDropExpand;
        "clr-drop-link": ClrDropLink;
        "clr-footer": ClrFooter;
        "clr-header": ClrHeader;
        "clr-icon-btn": ClrIconBtn;
        "clr-left-drawer": ClrLeftDrawer;
        "clr-nav-btn": ClrNavBtn;
        "clr-pn-btn": ClrPnBtn;
        "clr-popup-btn": ClrPopupBtn;
        "clr-top-nav": ClrTopNav;
        "clr-util-icn": ClrUtilIcn;
        "clr-wheel-ui": ClrWheelUi;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "clr-alert": LocalJSX.ClrAlert & JSXBase.HTMLAttributes<HTMLClrAlertElement>;
            "clr-carousel": LocalJSX.ClrCarousel & JSXBase.HTMLAttributes<HTMLClrCarouselElement>;
            "clr-drop-expand": LocalJSX.ClrDropExpand & JSXBase.HTMLAttributes<HTMLClrDropExpandElement>;
            "clr-drop-link": LocalJSX.ClrDropLink & JSXBase.HTMLAttributes<HTMLClrDropLinkElement>;
            "clr-footer": LocalJSX.ClrFooter & JSXBase.HTMLAttributes<HTMLClrFooterElement>;
            "clr-header": LocalJSX.ClrHeader & JSXBase.HTMLAttributes<HTMLClrHeaderElement>;
            "clr-icon-btn": LocalJSX.ClrIconBtn & JSXBase.HTMLAttributes<HTMLClrIconBtnElement>;
            "clr-left-drawer": LocalJSX.ClrLeftDrawer & JSXBase.HTMLAttributes<HTMLClrLeftDrawerElement>;
            "clr-nav-btn": LocalJSX.ClrNavBtn & JSXBase.HTMLAttributes<HTMLClrNavBtnElement>;
            "clr-pn-btn": LocalJSX.ClrPnBtn & JSXBase.HTMLAttributes<HTMLClrPnBtnElement>;
            "clr-popup-btn": LocalJSX.ClrPopupBtn & JSXBase.HTMLAttributes<HTMLClrPopupBtnElement>;
            "clr-top-nav": LocalJSX.ClrTopNav & JSXBase.HTMLAttributes<HTMLClrTopNavElement>;
            "clr-util-icn": LocalJSX.ClrUtilIcn & JSXBase.HTMLAttributes<HTMLClrUtilIcnElement>;
            "clr-wheel-ui": LocalJSX.ClrWheelUi & JSXBase.HTMLAttributes<HTMLClrWheelUiElement>;
        }
    }
}
