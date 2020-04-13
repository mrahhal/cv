import cl from '@/content/profile.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContentCoverLetter extends Vue {
  content = cl;
}
