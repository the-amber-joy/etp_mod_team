# ETP Mod Team tool
### (aka 'The Shitlist')

I haven't been on Facebook since December 2017, but I used to help moderate a large Facebook group, and my friends are still running it. With over 15,000 members in the group, we have a few simple rules to help keep the peace and make it a welcoming place for everyone. Some people will push close to the limits of those rules without explicitly breaking them, and they do this over and over again. The Moderator Team had been keeping track of these repeat offenders in a shared Google spreadsheet nicknamed 'the shitlist', and we would eventually ban the more troublesome repeat offenders based on the notes we had in their history.

This tool was created with the intention of making that task a little easier and prettier (mobile-friendly!). 

* MEAN Stack (MongoDB, Express, Angular, Node) 
* For the UI I am using Angular Material, which I wanted to get better with since I'm using a lot of it at work right now and it's not very well-documented (or some of the documentation I've read is flat-out inaccurate)
* I opted NOT to use Facebook authentication because I was feeling ethically uncomfortable with it, and the app would not have any direct interaction with Facebook anyway so it seemed unnecessary. Therefore I just built my authentication just uses local strategy (username/password).
* This project was my first time using JWTs (previosly I only had experience with cookies) so learning how to use those has been fun and I like them a lot
* It's a small, ultimately inconsequential "just-for-fun" app (we don't expect more than a few dozen records) for a small team (half a dozen people), so I'm hosting the app on Heroku (free) and the database on MLab (free). I registered the domain for $4, so I really haven't invested much in this besides time, but I've been enjoying myself and learning a lot!

I'm currently putting together an image-upload feature, and I'll be using AWS S3 for the storage. Cloud-based filesystem storage is a new thing for me, but I'm pretty excited about getting it set up and it should be pretty cheap after my first free year.

Other stuff in my backlog right now:
* Forgotten password reset
* Archive for all banned offenders since we don't need to keep track of them anymore, but may want to see what their history was, or why another moderator made the decision to ban.
* Also archive for those who get warned once, but then stop causing trouble after a period of time
* Set up some cron jobs for the aforementioned archiving? But this would require upgrading my Heroku dynos which would no longer be free. Unlikely to be a very large expense so I'm still considering it because I'd like to learn more about how to do that.
* Ability to edit offender names and/or add a list of their past names.
