import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: '<p>Atuação com PL/SQL em projetos para coleta de dados de estatistico e criação de mecanismo automatizado para inclusão do nono dígito em todas as linhas da operadora VIVO.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: '<p>Atuação com PL/SQL em projetos para coleta de dados de estatistico e criação de mecanismo automatizado para inclusão do nono dígito em todas as linhas da operadora VIVO.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: '<p>Atuação com PL/SQL em projetos para coleta de dados de estatistico e criação de mecanismo automatizado para inclusão do nono dígito em todas as linhas da operadora VIVO.',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        },
      ]
    }
  ]);

}
