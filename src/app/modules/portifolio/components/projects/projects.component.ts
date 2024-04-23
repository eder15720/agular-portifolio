import { Component, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/gitHub.svg',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description: '<p>Projeto angular com a disponibilização de projetos/experiencias obtidas por meio de estudos em cursos que fiz para melhoria e aperfeiçoamento da linguagem angular.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://github.com/eder15720/curso-angular-portifolio',
        },
      ]
    },
    {
      src: 'assets/img/projects/vfull.png',
      alt: '',
      title: 'Linkedin',
      width: '100px',
      height: '51px',
      description: '<p>Projeto em JAva feito para aprendimzagem e aperfeiçoamento de padrões de projetos utilizados atualmente em diversos locais tanto para projetos para mercado de trabalho.</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://github.com/eder15720/workshopSpring3',
        },
      ]
    }
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJETCTS
    })
  }
}
