import { Component } from '@angular/core';
import { TimeServiceService } from './time-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people = [
    {
      name: 'MaR',
      country: 'UK',
      time: '',
    },
    {
      name: 'Kevin',
      country: 'Uganda',
      time: '',
    },
    {
      name: 'Jack',
      country: 'Uganda',
      time: '',
    },
    {
      name: 'Emmanuel',
      country: 'Nigeria',
      time: '',
    },
    {
      name: 'Craig',
      country: 'NZ',
      time: '',
    },
  ];

  constructor(private timeService: TimeServiceService) {}

  ngOnInit(): void {
    const placeid = 'uganda/kampala';
    const accesskey = 'aGdRt7NxkA';
    const secretkey = 'qr5Mnw1eTdDftKUAT7Da';

    this.timeService.getTime(placeid, accesskey, secretkey).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
