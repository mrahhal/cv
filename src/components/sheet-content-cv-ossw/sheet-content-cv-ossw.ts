import { config } from '@/config';
import content from '@/content/oss-projects.json';
import { Component, Vue } from 'vue-property-decorator';

interface Project {
  id: number;
  place: string;
  year: string;
  title: string;
  content: string;
}

@Component
export default class SheetContentOssw extends Vue {
  private counter = 1;
  projects: Project[] = [];
  githubUserName = config.githubUsername;

  created() {
    this.projects = content as any;
    for (const p of this.projects) {
      p.id = this.counter++;
    }
  }
}
