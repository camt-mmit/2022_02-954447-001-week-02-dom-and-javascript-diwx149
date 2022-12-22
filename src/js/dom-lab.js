import { assign as assignInput } from './lab.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate = document.querySelector('template#tmp-input');
  const sectionTemplate = document.querySelector('template#tmp-section');
  const inputSection = document.querySelector('.cmp-input-section');
  const sectionSection = document.querySelector('.cmp-section-section');

  assignInput(inputSection, inputTemplate, sectionTemplate, sectionSection);
});
