export class TimelineItemModel {
    constructor (
        public _id: string,
        public age: any,
        public animalType: string,
        public title: string,
        public picture: {location: string, name: string},
        public subtitle: string,
        public descriptionText: string,
        public timelineIndex: string,
        public infoItems: any
    ) { }
  }