/*教师主页*/
//点击基本信息
function TeacherHomePageSkip1()
{
	window.location.href="TeacherHomePage.html";
}
//点击课程信息
function TeacherHomePageSkip2()
{
	window.location.href="TeacherCourseHomePage.html";
}
//点击新建课程
function TeacherHomePageSkip3()
{
	window.location.href="TeacherCreateCoursePage.html";
}

/*教师信息修改页*/
//点击提交、基本信息
function TeacherInfoModifyPageSkip1()
{
	window.location.href="TeacherHomePage.html";
}

//点击课程信息
function TeacherInfoModifyPageSkip2()
{
	window.location.href="TeacherCourseHomePage.html";
}
//点击新建课程
function TeacherInfoModifyPageSkip3()
{
	window.location.href="TeacherCreateCoursePage.html";
}

/*教师课程首页*/
//点击基本信息
function TeacherCourseHomePageSkip1()
{
	window.location.href="TeacherHomePage.html";
}

//点击课程信息
function TeacherCourseHomePageSkip2()
{
	window.location.href="TeacherCourseHomePage.html";
}
//点击新建课程
function TeacherCourseHomePageSkip3()
{
	window.location.href="TeacherCreateCoursePage.html";
}
//点击修改课程
function TeacherCourseHomePageSkip4()
{
	window.location.href="TeacherCourseInformation.html";
}
//点击删除课程
function TeacherCourseHomePageDeleteCourse()
{
	if(confirm('是否删除该课程?'))
	{
	   alert('成功删除');
	}
}