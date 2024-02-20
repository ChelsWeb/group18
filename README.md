# 2Fashionable
# התייחסות לסעיפים:
# סעיף 1 – יצירת עמודי html:
יצרנו 9 עמודי html:
1.העמוד הראשון של האתר שלנו הוא עמוד הכניסה (log in) שמאפשר כניסה לאתר במידה וכבר יצרת משתמש. במידה ולא, בתחתית העמוד קיים hyper link של יצירת משתמש (“sign up here!”).
(כרגע מאחר ועוד אין חיבור לאף דאטה בייס המשתמש שניתן להשתמש בו כדי להיכנס לאתר הוא "racheli@gmail.com", הסיסמא היא “password”)

2.בעמוד יצירת המשתמש (sign up) יש דרישה למילוי פרטים, שלאחריה נרשמים למטה באמצעות כפתור ה-“sign up”, שלוקח אותנו בחזרה לעמוד הכניסה.

3.לאחר הכניסה לאתר, העמוד הראשון שרואים הוא עמוד האקספלור (explore), בו ניתן לראות את כל המוצרים ולסנן אותם לפי קטגוריה ומיקום (כרגע המיקום כולל רק את הערים תל אביב, ירושלים, רעננה ורחובות). דרך העמוד ניתן להיכנס לעמודי המוצרים (כרגע ניתן להיכנס רק לעמוד של פריט ה"פונצ'ו", עליו בנינו את הדוגמא שלנו).

4.בתוך עמוד המוצר (product) ניתן לראות את תמונת המוצר, פרטים אודותיו ומי המוכר. 
דרך עמוד זה גם ניתן להיכנס לעמוד המוכר בלחיצה על התמונה שלו. 

5.בעמוד המוכר (seller) ניתן לראות את תמונתו, פרטיו, מוצרים שלו העומדים למכירה, ותגובות על המוכר ממשתמשים אחרים. 
דרך העמוד ניתן להגיע לתגובות המשתמשים על המוכר. 

6.בעמוד התגובות (reviews) ניתן לראות תגובות על המוכר ואף להוסיף תגובה שמופיעה בעמוד לאחר יצירתה (כרגע התגובה לא נשמרת כי אינה מחוברת לאף דאטה בייס).

**מכל עמוד באתר ניתן לראות את תפריט הצד שלנו, דרכו ניתן להגיע לדף האקספלור, לעמוד המועדפים ולעמוד “my account”.**

7.עמוד המועדפים (favorites) בו ניתן לראות את המוצרים שסומנו בלב (כרגע לא פונקציונאלי). 

8.בעמוד המשתמש שלי (my account) ניתן לראות את פרטי המשתמש, להוסיף תמונת פרופיל לעמוד המשתמש שלך, לשנות את שם המשתמש, המייל והסיסמא (עדיין לא פונקציונאלי).
מהעמוד הזה ניתן גם להגיע לעמוד של העלאת מוצר חדש למכירה.

9.בעמוד העלאת מוצר חדש (upload product) ניתן להוסיף תמונה של המוצר ופרטים נוספים עליו (כרגע לא פונקציונאלי).


# סעיף 2 – עיצוב העמודים css
על מנת שהעיצוב יישאר אחיד בין עמודי האתר, הוחלט על יצירת עמוד css אחד שמקושר לכל קבצי ה-html. 
ברוב העמודים שלנו השתמשנו באנימציית "hover" על פריטים "לחיצים". 


# סעיף 3 – מימוש דינאמי של האתר JavaScript
יצרנו 5 קבצי JavaScript, והשתמשנו בהם לפעולות הבאות:
1. בעמוד האקפלור יצרנו אופציה לסינון המוצרים.
2. בעמודים בהם נדרש למלא פרטים (כניסה, הרשמה, יצירת תגובות).
3. התפריט הצדדי .
	

# סעיף 4 – מימוש פונקציונאליות של השירות בצד הלקוח
כאשר מכניסים עיר בעמוד האקספלור, המידע נאסף ומוחזרים ללקוח המוצרים הרלוונטים לפי הקלט שהוכנס.
בעמודי הכניסה וההרשמה ישנו validation שמוודא שהכנסת הפרטים נעשית בצורה תקינה, בהתאם לקלט הנדרש:
- בשם המשתמש והעיר נדרש להשתמש באותיות בלבד
- במייל ישנה חובה להשתמש בסימנים נקודה (.) ושטרודל (@). 
- בסיסמא ישנה דרישה למלא לפחות שמונה תווים.


בעת סינון המוצרים, כרגע לא השתמשנו בפונקציית geolocation, אך מתכננות להשתמש בה בהמשך. 
כרגע, סינון הפריטים נעשה על ידי בחירה מתוך קטגוריה (ג'קטים, חולצות, תכשיטים) ומתוך רשימת ערים, שכרגע היא רשימה מצומצמת שכתבנו לכל פריט בנפרד (תל אביב, רעננה, רחובות וירושלים).

