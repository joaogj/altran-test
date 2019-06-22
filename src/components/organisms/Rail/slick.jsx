import styled, { css } 	from 'styled-components'

export const Container = styled.div`
    padding-top: 16px;
    @media screen and (min-width: 1024px) {
        width: 1230px;
    }
    .slick-slider
    {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }
    .slick-list
    {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    .slick-list:focus
    {
        outline: none;
    }
    .slick-list.dragging
    {
        cursor: pointer;
        cursor: hand;
    }
    .slick-slider .slick-track,
    .slick-slider .slick-list
    {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .slick-track
    {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .slick-track:before,
    .slick-track:after
    {
        display: table;
        content: '';
    }
    .slick-track:after
    {
        clear: both;
    }
    .slick-loading .slick-track
    {
        visibility: hidden;
    }
    .slick-slide
    {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
    }
    [dir='rtl'] .slick-slide
    {
        float: right;
    }
    .slick-slide img
    {
        display: block;
    }
    .slick-slide.slick-loading img
    {
        display: none;
    }
    .slick-slide.dragging img
    {
        pointer-events: none;
    }
    .slick-initialized .slick-slide
    {
        display: block;
    }
    .slick-loading .slick-slide
    {
        visibility: hidden;
    }
    .slick-vertical .slick-slide
    {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
        display: none;
    }
    .slick-dots {
      padding-left: 0px;
      margin: 0px;
      text-align: center;
      margin-top: 1px;
      @media (min-width: 1025px){
        display: none !important;
      }
      li {
        display: inline-block;
        margin-right: 2px;
        button {
        width: 8px;
        height: 8px;
        text-indent: -999em;
        background: #dbdbdb;
        border: 0;
        border-radius: 50%;
        padding: 0;
        outline: none;
      }
      &:last-child {
        margin-right: 0px;
      }
      &.slick-active { 
        button {
          background: #f55825;
        }
      }
    }
}
`