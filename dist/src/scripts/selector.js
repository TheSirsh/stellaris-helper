"use strict";
//import { ITraits } from "./interface";
//
//function selectTrait(str: string, arr: Array<ITraits>): void {
//  const containerArray: NodeListOf<HTMLElement> = document.querySelectorAll(`.${str}__trait-container`);
//
//  containerArray.forEach(function(elem: Element, i: number) {
//    elem.addEventListener("click", function(): void {
//      localStorage.setItem(`${str}`, arr[i].trait);
//      elem.classList.toggle(`${str}__trait-container_active`);
//
//      selected(i, arr)
//
//      const button: HTMLElement = document.querySelector(`.${str}__button`);
//      if (button) {
//        button.classList.add(`.${str}__button_active`);
//        button.classList.remove(`.${str}__button`);
//        button.addEventListener("click", nextStage)
//      }
//
//    })
//  })
//}
