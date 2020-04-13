import cl from '@/content/cover-letter.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentCoverLetter extends Vue {
  content = cl;
}
