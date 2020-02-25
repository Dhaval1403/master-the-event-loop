import { createGlobalStyle } from 'styled-components'

import { scrollbar } from './scroll'
import { variable } from './variable'

export const Normalize = createGlobalStyle`
    /* GENERAL */
    * {
        border: 0;
        box-sizing: border-box;
        margin: 0;
        outline: none;
        padding: 0;
        vertical-align: baseline;
        /* z-index: 0; */
    }
    /* Address '[hidden]' styling not present in IE 8/9. */
    /* Hide the 'template' element in IE, Safari, and Firefox < 22. */
    [hidden],
    template {
        display: none;
    }
    /* Corrects block display not defined in IE6/7/8/9 & FF3 */
    article,
    aside,
    details,
    div,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    menu,
    nav,
    section,
    summary {
        display: block;
        position: relative;
    }
    /* Correct 'inline-block' display not defined in IE 6/7/8/9 and Firefox 3. */
    /* Normalize vertical alignment of 'progress' in Chrome, Firefox, and Opera. */
    audio,
    canvas,
    progress,
    video {
        display: inline-block;
        vertical-align: baseline;
    }
    /* Prevents modern browsers from displaying 'audio' without controls */
    /* Remove excess height in iOS 5 devices */
    audio {
        &:not([controls]) {
            display: none;
            height: 0;
        }
    }
    blockquote {
        border-left: 5px solid ${variable.colorGray4};
        margin: 1rem 0;
        padding-left: 1.5rem;
    }
    html {
        > body {
            ${scrollbar()};
            background-color: ${variable.colorWhite};
            color: ${variable.fontColor};
            font-family: ${variable.fontPrimary};
            font-size: ${variable.fontSize};
            height: 100%;
            letter-spacing: ${variable.letterSpacing};
            line-height: ${variable.lineHeight};
            margin: 0;
            padding: 0;
            user-select: text;
            width: 100%;
            z-index: 0;
            &.overflow-hidden {
                overflow: hidden;
            }
        }
    }
    /* FORM */
    /* Address margins set differently in Firefox 4+, Safari, and Chrome. */
    /* Remove inner padding and border in Firefox 4+. */
    button,
    input,
    label,
    select,
    textarea {
        display: block;
        line-height: inherit;
    }
    select {
        appearance: none;
        border: 0;
        cursor: pointer;
        max-width: 100%;
        text-transform: none;
        width: auto;
        &::-ms-expand {
            display: none;
        }
    }
    textarea {
        overflow: auto;
        resize: none;
    }
    button,
    input,
    label,
    optgroup,
    select,
    textarea {
        color: inherit;
        position: relative;
        &::-moz-focus-inner {
            border: 0;
        }
    }
    /* Re-set default cursor for disabled elements. */
    button[disabled='true'],
    input[disabled='true'],
    select[disabled='true'],
    textarea[disabled='true'] {
        cursor: not-allowed;
        opacity: 0.3;
    }
    fieldset {
        border: 0;
        margin: 40px 0 0 0;
    }
    input[type='file'] {
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        width: 0.1px;
        z-index: -1;
    }
    /* Fix the cursor style for Chrome's increment/decrement buttons. For certain */
    /* 'font-size' values of the 'input', it causes the cursor style of the */
    /* decrement button to change from 'default' to 'text'. */
    input[type='number'] {
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            height: auto;
        }
    }
    /* Remove inner padding and search cancel button in Safari and Chrome on OS X. */
    /* Safari (but not Chrome) clips the cancel button when the search input has */
    /* Address 'appearance' set to 'searchfield' in Safari and Chrome. */
    input[type='search'] {
        appearance: none;
        &::-webkit-search-cancel-button,
        &::-webkit-search-decoration {
            appearance: none;
        }
    }
    /* IMG */
    img,
    picture {
        border: 0;
        height: auto;
        margin: auto;
        max-width: 100%;
        vertical-align: middle;
        width: auto;
    }
    /* LINK */
    a {
        background-color: transparent;
        color: inherit;
        cursor: pointer;
        display: inline-block;
        position: relative;
        text-decoration: none;
    }
    /* LIST */
    ol,
    ul {
        display: block;
        height: auto;
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: relative;
        width: auto;
    }
    /* TABLE */
    table {
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        width: 100%;
        td,
        th,
        tr {
            vertical-align: middle;
        }
    }
    /* TEXT */
    /* Address styling not present in IE 8/9/10/11, Safari, and Chrome. */
    abbr[title] {
        border-bottom: 1px dotted;
    }
    /* Address style set to 'bolder' in Firefox 4+, Safari, and Chrome. */
    b,
    strong,
    .strong {
        font-weight: 700;
    }
    /* Address odd 'em'-unit font size rendering in all browsers. */
    /* Correct font family set oddly in IE 6, Safari 4/5, and Chrome. */
    code,
    kbd,
    pre,
    samp {
        font-family: monospace;
    }
    del,
    s {
        text-decoration: line-through;
    }
    /* Address styling not present in Safari and Chrome. */
    dfn {
        font-style: italic;
    }
    em,
    i {
        font-style: italic;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        display: block;
    }
    /* Address differences between Firefox and other browsers. */
    hr {
        border-bottom: 1px solid ${variable.borderColor};
        border-left: 0;
        border-right: 0;
        border-top: 0;
        box-sizing: content-box;
        height: 0;
        margin: ${variable.spacingMD} auto;
        width: 100%;
    }
    p {
        margin: 0 0 ${variable.spacingSM} 0;
        position: relative;
        user-select: text;
    }
    /* Contain overflow in all browsers. */
    pre {
        overflow: auto;
    }
    /* Address inconsistent and variable font size in all browsers. */
    small {
        font-size: 80%;
    }
    span {
        position: relative;
    }
    var {
        font-style: normal;
    }
`
