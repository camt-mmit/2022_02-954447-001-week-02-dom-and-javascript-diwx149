// move every function to this except DOMContentLoaded
function computeTotal(inputsContainer, resultComponent) {
  // number only
  const total = [...inputsContainer.querySelectorAll('.cmp-input-container')]
    .map((elem) => elem.querySelector('.cmp-input'))
    .reduce((carry, elem) => carry + elem.valueAsNumber, 0);

  resultComponent.value = total;
}

function rebuildIndex(inputsContainer) {
  // run เลข number
  const inputContainers = [
    ...inputsContainer.querySelectorAll('.cmp-input-container'),
  ];

  inputContainers.forEach((elem, i) => {
    [...elem.querySelectorAll('.cmp-input-no')].forEach((elem) => {
      elem.innerText = i + 1;
    });
  });

  [...inputsContainer.querySelectorAll('.cmd-remove-input')].forEach((elem) => {
    elem.disabled = !(inputContainers.length > 1);
  });
}

function rebuildIndexSection(sectionsContainer) {
  // run เลข section
  const sectionContainers = [
    ...sectionsContainer.querySelectorAll('.cmp-section-container'),
  ];

  sectionContainers.forEach((elem, i) => {
    [...elem.querySelectorAll('.cmp-section-no')].forEach((elem) => {
      elem.innerText = i + 1;
    });
  });

  [...sectionsContainer.querySelectorAll('.cmd-remove-section')].forEach(
    (elem) => {
      elem.disabled = !(sectionContainers.length > 1);
    },
  );
}

function add(inputsContainer, resultComponent, template) {
  // add number box
  const fragment = template.content.cloneNode(true);

  inputsContainer.append(fragment);

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function addSection(sectionsContainer, sectiontemplate, inputtemplate) {
  // add section
  const fragment = sectiontemplate.content.cloneNode(true);
  // const inputsSection = fragment.querySelector('cmp-inputs-container');
  const sectionContainer = fragment.querySelector('.cmp-input-section');
  // const inputfragment = inputtemplate.content.cloneNode(true);

  sectionsContainer.append(fragment);
  // inputsContainer.append(inputfragment);

  rebuildIndexSection(sectionsContainer);
  assignInput(sectionContainer, inputtemplate);
  // rebuildIndex(inputsContainer);
  //   computeTotal(inputsContainer, resultComponent);
}

function remove(inputsContainer, resultComponent, inputContainer) {
  // remove number box
  inputContainer.remove();

  rebuildIndex(inputsContainer);
  computeTotal(inputsContainer, resultComponent);
}

function removeSection(sectionsContainer, sectionContainer) {
  // remove section
  sectionContainer.remove();

  rebuildIndexSection(sectionsContainer);
  //   computeTotal(sectionsContainer, resultComponent);
}

export function assignInput(sectionContainer, inputTemplate, mainContainer) {
  // console.debug(mainContainer);
  const inputsContainer = sectionContainer.querySelector(
    '.cmp-inputs-container',
  );
  const resultComponent = sectionContainer.querySelector('.cmp-result');
  // sectionSection.addEventListener('click', (ev) => {
  //   // section buton
  //   if (ev.target.matches('.cmd-add-section')) {
  //     addmerge(
  //       inputsContainer,
  //       resultComponent,
  //       inputTemplate,
  //       sectionsContainer,
  //       sectionTemplate,
  //     );
  //   }
  // });

  sectionContainer.addEventListener('click', (ev) => {
    // INPUT button
    if (ev.target.matches('.cmd-add-input')) {
      add(inputsContainer, resultComponent, inputTemplate);
    }
  });

  inputsContainer.addEventListener('change', (ev) => {
    // change number
    if (ev.target.matches('input[type="number"]')) {
      computeTotal(inputsContainer, resultComponent);
    }
  });
  inputsContainer.addEventListener('click', (ev) => {
    //remove number box
    if (ev.target.matches('.cmd-remove-input')) {
      const inputContainer = ev.target.closest('.cmp-input-container');
      remove(inputsContainer, resultComponent, inputContainer);
    }
  });

  add(inputsContainer, resultComponent, inputTemplate);
  // addmerge(
  //   inputsContainer,
  //   resultComponent,
  //   inputTemplate,
  //   sectionsContainer,
  //   sectionTemplate,
  // );
}
export function assignSection(sectionTemplate, inputTemplate, mainContainer) {
  // const sectionSection = mainContainer.querySelector('.cmp-section-section');
  // const inputsContainer = mainContainer.querySelector('.cmp-inputs-container');
  const sectionsContainer = mainContainer.querySelector(
    '.cmp-sections-container',
  );
  // console.debug(sectionsContainer);
  mainContainer.addEventListener('click', (ev) => {
    // section buton
    if (ev.target.matches('.cmd-add-section')) {
      addSection(sectionsContainer, sectionTemplate, inputTemplate);
    }
  });
  sectionsContainer.addEventListener('click', (ev) => {
    //remove section
    if (ev.target.matches('.cmd-remove-section')) {
      const sectionContainer = ev.target.closest('.cmp-section-container');
      removeSection(sectionsContainer, sectionContainer);
    }
  });
  addSection(sectionsContainer, sectionTemplate, inputTemplate);
}
