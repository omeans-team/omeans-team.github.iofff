// Skills.js
export default function Skills() {
	const skills = ["HTML", "CSS", "Javascript", "PHP", "React", "Photoshop"];
	const width = [{ width: '95%' }, { width: '89%' }, { width: '87%' }, { width: '80%' }, { width: '78%' }, { width: '77%' }];
	return (
	  <div class="col-md mb-5" id="skills">
		<h2 class="mb-5">Skills</h2>
  
		{skills.map((skill, index) => {
		  return (
			<div key={index} class="progress mb-4" style={{ height: '25px' }}>
			  <div
				class="progress-bar bg-primary text-left pl-2"
				role="progressbar"
				style={width[index]}
				aria-valuenow="95"
				aria-valuemin="0"
				aria-valuemax="100"
			  >
				{skill}
			  </div>
			</div>
		  );
		})}
	  </div>
	);
  }