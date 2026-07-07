import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import MermaidDiagram from './components/MermaidDiagram.vue'
import StepCard from './components/StepCard.vue'
import InfoCard from './components/InfoCard.vue'
import FaqAccordion from './components/FaqAccordion.vue'
import TabItem from './components/TabItem.vue'
import TabGroup from './components/TabGroup.vue'
import StatusBadge from './components/StatusBadge.vue'
import FileRequirements from './components/FileRequirements.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {}),
  enhanceApp({ app }) {
    app.component('MermaidDiagram', MermaidDiagram)
    app.component('StepCard', StepCard)
    app.component('InfoCard', InfoCard)
    app.component('FaqAccordion', FaqAccordion)
    app.component('TabItem', TabItem)
    app.component('TabGroup', TabGroup)
    app.component('StatusBadge', StatusBadge)
    app.component('FileRequirements', FileRequirements)
  },
} satisfies Theme
