export default {
  editor: {
    label: {
      en: "WWC Rating Numbers",
    },
  },
  triggerEvents: [
      { name: 'change', label: 'On Change', event: { value: '' }, default: true },
  ],
  properties: {
    value: {
      label: {
        en: "Value",
      },
      type: "Number",
      defaultValue: 3,
      bindable: true,
    },
    ratings: {
      label: {
        en: "Ratings",
      },
      type: "Array",
      options: {
        item: {
          type: 'Number',
          defaultValue: 0,
        },
      },
      defaultValue: [1, 2, 3, 4, 5],
      bindable: true,
    },
    color: {
      label: {
        en: "Color",
      },
      type: "Color",
      defaultValue: '#ffc107',
      bindable: true,
    },
    backgroundColor: {
      label: {
        en: "Background color",
      },
      type: "Color",
      defaultValue: '#fcfcfc',
      bindable: true,
    },
    textColorSelected: {
      label: {
        en: "Text color selected",
      },
      type: "Color",
      defaultValue: '#ffffff',
      bindable: true,
    },
    textColorUnselected: {
      label: {
        en: "Text color unselected",
      },
      type: "Color",
      defaultValue: '#ababab',
      bindable: true,
    },
    hoverColor: {
      label: {
        en: "Hover color",
      },
      type: "Color",
      defaultValue: '#ffffff',
      bindable: true,
    },
    hoverEffect: {
      label: {
        en: "Display hover effect",
      },
      type: "OnOff",
      defaultValue: true,
      bindable: true,
    },
  },
};
