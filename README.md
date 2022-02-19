# Project REST-Rant

## USER STORIES (RANTS)
    -"As A (user type) I need (feature) so I can (action)"

## Color Scheme: Neutral tones, red or orange as backing color

REST-Rant is an app where users can review restaurants.

Places should have
 - name (string)
 - city (string)
 - state (string)
 - cuisines (string)
 - picture (string)

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET    |   /  | Home Page |
| GET    | /places | Places Index Page |
| POST   | /places | Create new place |
| GET    | /places/new | Form page for creating new place |
| GET    | /places/:id | Details about a particlar place |
| PUT    | /places/:id | Update a particular place |
| GET    | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST   | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rantId | Delete a rant (comment) about a particular place |
| GET    | * | 404 Page (matches any route not defined above) |


## Photo Credits 
Tea Photo Credit:
Photo by <a href="https://unsplash.com/@stri_khedonia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alice Pasqual</a> on <a href="https://unsplash.com/s/photos/free-thai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

chocolate pie credit:
Photo by <a href="https://unsplash.com/@uniqueton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anton</a> on <a href="https://unsplash.com/s/photos/free-chocolate?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>


grill photo credit:
Photo by Narda Yescas from Pexels

Image by <a href="https://pixabay.com/users/mammiya-12752456/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6935938">Mariya 🌸🌺🌼</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=6935938">Pixabay</a>