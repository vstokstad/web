---
slug: "/projects/beppu"

title: "BEPPUS"

description: "In BEPPUS, a 'Oddworld meets Lemmings' puzzle platformer, you lead a group of Beppus with strange powers. Their world is harsh, and sacrificing some of them will be needed for the others’ salvation. How many can you save?"

descriptionLong: "In BEPPUS, a 'Oddworld meets Lemmings' puzzle platformer, you lead a group of Beppus with strange powers. Their world is harsh, and sacrificing some of them will be needed for the others’ salvation. How many can you save? BEPPUS is for players whom want to play a challenging and mind-bending puzzle platformer where levels can be approached in different ways."

video: "https://player.vimeo.com/video/665139096?h=e5226f3683&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"

img: "https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/65a362dd-71eb-43a4-ba88-22e49fc15fc4.gif?ClientID=vimeo-core-prod&Date=1641989162&Signature=5475a7b975ce9ca61275be144251434e903d826e"

link: "https://futuregames.itch.io/fg20-ft-gp4-beppus"

teamSize: "6"

projectTime: "4 weeks"

engine: "Unreal Engine 4 / C++"

role: "Gameplay & Systems programmer. Responsible for version control."

myWork: "I did a lot of the general gameplay, including AI and interactions/commands as well as designed the systems behind the different commands for the controllable characters. I did the system with designers in mind, resulting in editable blueprints handling the visual ques connected to them."

lessons: "Do level streaming from the start, don't rework the level structure two days before deadline for 'performance'. Buddy coding and closely integrated work between us programmers resulted in a fun AND quite effective workload."

isActive: true

hasCode: true

---

```cpp{}
bool AGP_Minion::ReceivedCommand( TSubclassOf<UGP_MinionCommand_Base> Command ){
	if (Command->IsChildOf(UGP_MinionCommand_UnPossess::StaticClass()) == true) {
		CurrentCommand = NewObject<UGP_MinionCommand_Base>(this, Command);
		CurrentCommand->ExecuteCommand(this);
		return true;
	}
	
	if ( CurrentCommand != nullptr){
		if ( !CurrentCommand->bIsOverridableCommand ){
			// LOG("Command not overridable, returning");
			return false;
		}
		// LOG("ReceivedCommand::CancelCommand");
		CancelCommand();
	}
	CurrentCommand = NewObject<UGP_MinionCommand_Base>(this, Command);
	CurrentCommand->ExecuteCommand(this);
	return true;
}
```