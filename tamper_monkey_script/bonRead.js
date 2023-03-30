// ==UserScript==
// @name         Highlight First Two Characters of Each Sentence in Article Body
// @namespace    Github@Cheong43
// @version      1.0
// @description  Highlight the first two characters of each sentence in the article body by enlarging their font size.
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const allArticleBodies = document.querySelectorAll('article, .post'); 

  allArticleBodies.forEach((articleBody) => {
    const paragraphs = articleBody.querySelectorAll('p');

    paragraphs.forEach((paragraph) => {
      const sentences = paragraph.textContent.trim().split(/。|！|？/); 

      sentences.forEach((sentence) => {
        const firstTwoCharacters = sentence.substring(0, 2); 

        const highlightedSentence = sentence.replace(firstTwoCharacters, `<span style="font-size: 1.5em">${firstTwoCharacters}</span>`); 

        paragraph.innerHTML = paragraph.innerHTML.replace(sentence, highlightedSentence); 
      });
    });
  });
})();
