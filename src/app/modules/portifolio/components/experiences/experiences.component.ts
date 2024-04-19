import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';


//Interface
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Analista de Sistemas',
        p: 'Sompo Seguros | Jul 2021 - Data Atual'
      },
      text: '<p>Durante o meu período na Sompo, atuei com análise de sistemas, correção de problemas, planejamento e desenvolvimento de projetos voltados para aplicações da área de sinistros</p>'
    },
    {
      summary: {
        strong: 'Analista Desenvolvedor',
        p: 'Tokio Marine Seguros | Jul 2019 - Jul 2021'
      },
      text: '<p>Durante o meu período na Tokio Marine, atuei com análise de sistemas, correção de problemas, planejamento e desenvolvimento de projetos voltados para aplicações de estatísticos, Gestão e Impressão de Apólices com java e PL/SQL (ORACLE)</p>'
    },
    {
      summary: {
        strong: 'Analista Desenvolvedor',
        p: 'Ericsson Inovação | Jul 2016 - Jul 2019'
      },
      text: '<p>Durante o meu período na Tokio Marine, atuei com análise de sistemas, correção de problemas, planejamento e desenvolvimento de projetos voltados para aplicações de estatísticos, Gestão e Impressão de Apólices com java e PL/SQL (ORACLE)</p>'
    },
    {
      summary: {
        strong: 'Desenvolvedor',
        p: 'SIANET Datacenters | Ago 2013 - Jul 2016'
      },
      text: '<p>Durante o meu período na SIANET, atuei com análise de sistemas, correção de problemas, planejamento e desenvolvimento de projetos voltados para aplicações com APEX e PL/SQL (ORACLE)</p>'
    }
  ])
}
