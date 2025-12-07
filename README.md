# alex-brefka updated

## Final Project Enhancement

### Enhancement(s) Implemented

- Toast notifications
- Loading skeletons

### Video Demonstration

https://drive.google.com/file/d/1vxUmROafKxTFjnzJYYqjTbui98p23Hfl/view?usp=sharing 

### Features Added

- Added loading skeletons for: 
    - home screen (both logged in and logged out)
    - post detail (both logged in and logged out)
    - edit post
- Added toast notifications for:
    - log in feedback
    - adding posts
    - editing posts
    - deleting posts (prompts for confirmation)
    


### Technical Implementation

- Libraries/tools used
    - https://react-hot-toast.com/
    - https://www.npmjs.com/package/react-loading-skeleton
- Key challenges solved
    - It was pretty difficult getting the sizing of the skeletons correct. Sometimes I would return the skeleton even when the page was done loading just to see it.
    - some skeleton flex containers weren't working which I later figured out that it was automatically wrapping my skeletons in containers when I didn't want it to. I fixed this by wrapping them myself.
- Main files/components created
    - PostCardSkeleton.jsx
    - PostFormSkeleton.jsx
### New Dependencies

-  'react-hot-toast' - Very clean and smooth notifications that are great way to provide user feedback

- 'react-loading-skeleton' - Nice looking, animated loading skeletons

### Setup Instructions

1. Install dependencies: 
`npm install react-hot-toast`
`npm install react-loading-skeleton`

