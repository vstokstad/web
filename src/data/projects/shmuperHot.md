---
slug: "/projects/suboptimal"

title: "ShmuperHot"

description: "Space Shoot'Em Up mini-game with heavy inspiration from Super Hot in regard to time dilation and slow-motion. Developed as an assignment at Future Games, then ported to Mobile (iOS) through Unity as a side project."

video: 

img: "./images/GIF/shmuperhot.gif"

link: 

teamSize: "solo project"

projectTime: "2 weeks"

role: "Everything"

engine: "Unity / C# and XCode / swift"

myWork: "Tasked with making a simple space shooter I experimented with time controlled by gameplay, time only moves forward as the player vessel moves around. When porting to iOS i reworked the whole structure of the codebase to make it more performant, implementing a semi data oriented design, where I collectively call update and fixed update on groups of objects instead of running it individually (as is the base implementation in Unity)."

lessons: "Mobile UI is hard to get right. Porting to mobile is less about getting it to run on a small device and more about getting it to feel good on a mobile device."

isActive: true

hasCode: true

---
```csharp{12-18}
 public class BatchUpdateManager : MonoBehaviour {
        [SerializeField] private EnemySpawnManager _enemySpawnManager;
        [SerializeField] private SpaceJunkManager _spaceJunkManager;
        [SerializeField] private TimeManager _timeManager;
        [SerializeField] private PlayerBoundaries _playerBoundaries;
        [SerializeField] private PlayerInput _playerInput;
        [SerializeField] private PlayerController _playerController;
        [SerializeField] private PlayerMovement _playerMovement;
        [SerializeField] private ShieldControl _shieldControl;
        [SerializeField] private BackgroundController _backgroundController;

        private void Update(){
            _enemySpawnManager.BatchUpdate();
            _playerInput.BatchUpdate();
            _playerController.BatchUpdate();
            _shieldControl.BatchUpdate();
            _backgroundController.BatchUpdate();
        }

        private void FixedUpdate(){
            _spaceJunkManager.BatchFixedUpdate();
            _timeManager.BatchFixedUpdate();
            _playerBoundaries.BatchFixedUpdate();
        }
    }
```