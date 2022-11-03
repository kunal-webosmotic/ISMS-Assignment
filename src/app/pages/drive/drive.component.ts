import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit {

  driveData: any = {
    showLoader: true,
    data: []
  };

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.driveData.data = [
        {
          name: 'Folder 1',
          type: 'folder'
        },
        {
          name: 'Folder 2',
          type: 'folder'
        },
        {
          name: 'Folder 3',
          type: 'folder'
        },
        {
          name: 'Folder 4',
          type: 'folder'
        },
        {
          name: 'Folder 5',
          type: 'folder'
        },
        {
          name: 'Folder 6',
          type: 'folder'
        },
        {
          name: 'Folder 7',
          type: 'folder'
        },
        {
          name: 'Folder 8',
          type: 'folder'
        },
        {
          name: 'Folder 9',
          type: 'folder'
        },
        {
          name: 'Folder 10',
          type: 'folder'
        },
        {
          name: 'test1.pdf',
          type: 'pdf'
        },
        {
          name: 'test2.xlsx',
          type: 'excel'
        },
        {
          name: 'test3.zip',
          type: 'zip'
        },
        {
          name: 'test4.png',
          type: 'image'
        }
      ];
      this.driveData.showLoader = false;
    }, 5000);
  }

}
