import { Injectable } from '@angular/core'

export interface DataItem {
  id: number
  name: string
  description: string
  dr: string
  date: string
  time: string
  apptType: string
  notes: string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items = new Array<DataItem>(
    {
      id: 1,
      name: 'Item 1',
      description: 'Description for Item 1',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description for Item 2',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description for Item 3',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 4,
      name: 'Item 4',
      description: 'Description for Item 4',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 5,
      name: 'Item 5',
      description: 'Description for Item 5',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 6,
      name: 'Item 6',
      description: 'Description for Item 6',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 7,
      name: 'Item 7',
      description: 'Description for Item 7',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 8,
      name: 'Item 8',
      description: 'Description for Item 8',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 9,
      name: 'Item 9',
      description: 'Description for Item 9',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    },
    {
      id: 10,
      name: 'Item 10',
      description: 'Description for Item 10',
      dr: "Dr. Doctor",
      date: "Sep. 20, 2021",
      time: "8:00am",
      apptType: "General Checkup",
      notes: "back pain, knee pain"
    }
  )

  getItems(): Array<DataItem> {
    return this.items
  }

  getItem(id: number): DataItem {
    return this.items.filter((item) => item.id === id)[0]
  }
}
