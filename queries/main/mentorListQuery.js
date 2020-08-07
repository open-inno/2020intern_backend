exports.getMentorList = `
SELECT DISTINCT 
	mentor_USN, 
	name, 
	email, 
	image_url, 
	description, 
	company
FROM get_mentor_list`;

exports.getAllCareer = `
SELECT 
	content, 
	user_USN 
FROM Career 
ORDER BY user_USN;`;

exports.orderMentor = `
SELECT DISTINCT count(DISTINCT keyword_ID) as searched, name, company, mentor_USN, email, image_url, description, company
FROM get_mentor_list`