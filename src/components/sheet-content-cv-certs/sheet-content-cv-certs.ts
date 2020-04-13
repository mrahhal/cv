import content from '@/content/certs.md';
import { Component, Vue } from 'vue-property-decorator';

interface Cert {
  id: number;
  year: string;
  title: string;
}

@Component
export default class SheetContentCerts extends Vue {
  content: string = content;
  certs: Cert[] = [];
  private counter = 1;

  created() {
    const c = this.content;
    const split = c.split('---').map(x => x.trim());
    this.certs = split.map(str => this._processCert(str));
  }

  private _processCert(str: string): Cert {
    const year = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    const title = str.trim();

    return {
      id: this.counter++,
      year,
      title,
    };
  }
}
