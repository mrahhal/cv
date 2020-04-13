import { config } from '@/config';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetHeader extends Vue {
  private grayscalePicture = config.grayscalePicture;
}
