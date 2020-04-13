import content from '@/content/work.md';
import { Component, Vue } from 'vue-property-decorator';

interface Work {
  id: number;
  place: string;
  year: string;
  title: string;
  content: string;
}

@Component
export default class SheetContentCv extends Vue {
  content: string = content;
  works: Work[] = [];
  private _counter = 1;

  created() {
    const c = this.content;
    const split = c.split('---').map(x => x.trim());
    this.works = split.map(str => this._processWork(str));
  }

  private _processWork(str: string): Work {
    const place = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    const year = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    const title = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    str = str.substr(1);

    return {
      id: this._counter++,
      place,
      year,
      title,
      content: str,
    };
  }
}
