# tour \_&\_travel

# **_3 Model_**

User
Tour
Review

userModel {
name
email
age
photo
role -> user,admin
status -> active,inactive
}

tourModel {
name
duration
rating
price
coverImage
image
startDate
tourLocation
endDate
}

reviewModel {
review
rating
tourName -> ref
user -> ref
}
