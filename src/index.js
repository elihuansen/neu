import NeuButton from "./components/NeuButton";
import NeuIcon from "./components/NeuIcon";
import NeuInput from "./components/NeuInput";
import NeuList from "./components/NeuList";
import NeuDropdown from "./components/NeuDropdown";
import NeuSearch from "./components/NeuSearch";
import './style/index.scss';

export default function install(Vue) {
  Vue.component('NeuButton', NeuButton);
  Vue.component('NeuIcon', NeuIcon);
  Vue.component('NeuInput', NeuInput);
  Vue.component('NeuList', NeuList);
  Vue.component('NeuDropdown', NeuDropdown);
  Vue.component('NeuSearch', NeuSearch);
}

export {
  NeuButton,
  NeuIcon,
  NeuInput,
  NeuList,
  NeuDropdown,
  NeuSearch,
};