import RadioButton from "../RadioButton/RadioButton.svelte";

const reusableOptions = [
	{
		name: "Armstrong-Siddeley",
		value: "Armstrong-Siddeley",
	},
	{
		name: "Jaguar Mark II",
		value: "Jaguar Mark II",
	},
	{
		name: "Ford Zephyr",
		value: "Ford Zephyr",
	},
];

function onChange(event) {
	let selected = event.currentTarget.value;
}

export default {
	title: "Cobalt UI Library/Basic Components/RadioButton",
	component: {RadioButton},
}

const Template = ({ ...args }) => ({
  Component: RadioButton,
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  options: reusableOptions,
	onChange: onchange,
};
