import { Row, Col, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultThemeImage from '../../assets/images/default-theme-image.png';
import lightThemeImage from '../../assets/images/light-theme-image.png';
import darkThemeImage from '../../assets/images/dark-theme-image.png';
import unknownSpaceThemeImage from '../../assets/images/unknown-space-theme-image.png';
import tasksBg from '../../assets/images/bg.jpg';
import unknownSpaceImg from '../../assets/images/unknown-space.jpg';
import './themes.css';

const Themes = _ => {

  const [theme, setTheme] = useState();
  const navigate = useNavigate();

  const themes = [
    {
      id: 1,
      themeName: 'Default',
      image: defaultThemeImage
    },
    {
      id: 2,
      themeName: 'Light',
      image: lightThemeImage,
    },
    {
      id: 3,
      themeName: 'Dark',
      image: darkThemeImage,
    },
    {
      id: 4,
      themeName: 'Unknown Space',
      image: unknownSpaceThemeImage,
    },
  ];

  useEffect(() => {
    let cards = document.getElementsByClassName('theme-card')
    for (let i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", function () {
        let selectedEl = document.querySelector(".selected");
        if (selectedEl) {
          selectedEl.classList.remove("selected");
        }
        this.classList.add("selected");
      }, false);
    }
  });

  const selectTheme = theme => {
    setTheme(theme);
  };

  const applyTheme = _ => {
    const root = document.documentElement;
    const rootStyle = root.style;
    switch (theme.themeName) {
      case 'Light':

        const lightTheme = [
          //tasks
          {
            '--tasks-bg': '#f9fdff'
          },
          {
            '--tasks-container-bg': '#fff'
          },
          {
            '--tasks-section-bg': '#f2f6ff'
          },
          {
            '--add-new-task-btn-bg': '#282f65'
          },
          {
            '--add-new-task-btn-color': '#fff'
          },
          {
            '--personalize-btn-bg': '#fedd92'
          },
          {
            '--tasks-head-color': '#464e61'
          },
          {
            '--subtasks-head-color': '#252c46'
          },
          {
            '--tasks-details-bg': '#fff'
          },
          {
            '--tasks-details-color': '#000'
          },

          //add-task
          {
            '--add-task-container-bg': '#fff'
          },

          //edit-task
          {
            '--close-icon': '#000'
          },

          //themes
          {
            '--themes-bg': '#f9fdff'
          },
          {
            '--apply-btn-bg': '#282f65'
          },
          {
            '--themes-head': '#000'
          },
        ];

        for (let i = 0; i < lightTheme.length; i++) {
          rootStyle.setProperty(Object.keys(lightTheme[i])[0], Object.values(lightTheme[i])[0]);
        };
        break;
      case 'Dark':

        const darkTheme = [
          //tasks
          {
            '--tasks-bg': '#000'
          },
          {
            '--tasks-container-bg': '#171918'
          },
          {
            '--tasks-section-bg': '#2e3845'
          },
          {
            '--add-new-task-btn-bg': '#303433'
          },
          {
            '--add-new-task-btn-color': '#fff'
          },
          {
            '--personalize-btn-bg': '#caccce'
          },
          {
            '--tasks-head-color': '#fff'
          },
          {
            '--subtasks-head-color': '#fff'
          },
          {
            '--tasks-details-bg': '#171918'
          },
          {
            '--tasks-details-color': '#fff'
          },

          //add-task
          {
            '--add-task-container-bg': '#171918'
          },

          //edit-task
          {
            '--close-icon': '#fff'
          },

          //themes
          {
            '--themes-bg': '#070c10'
          },
          {
            '--apply-btn-bg': '#303433'
          },
          {
            '--themes-head': '#fff'
          },
        ];

        for (let i = 0; i < darkTheme.length; i++) {
          rootStyle.setProperty(Object.keys(darkTheme[i])[0], Object.values(darkTheme[i])[0]);
        };
        break;
      case 'Unknown Space':

        const unknownSpaceTheme = [
          //tasks
          {
            '--tasks-bg': `url(${unknownSpaceImg})`
          },
          {
            '--tasks-container-bg': 'rgba(0, 0, 0, 0.45)'
          },
          {
            '--tasks-section-bg': '#fdac6f'
          },
          {
            '--add-new-task-btn-bg': '#480d2b'
          },
          {
            '--add-new-task-btn-color': '#fff'
          },
          {
            '--personalize-btn-bg': '#b1aecc'
          },
          {
            '--tasks-head-color': '#fff'
          },
          {
            '--subtasks-head-color': '#252c46'
          },
          {
            '--tasks-details-bg': '#171918'
          },
          {
            '--tasks-details-color': '#000'
          },

          //add-task
          {
            '--add-task-container-bg': 'rgba(0, 0, 0, 0.65)'
          },

          //edit-task
          {
            '--close-icon': '#fff'
          },

          //themes
          {
            '--themes-bg': `url(${unknownSpaceImg})`
          },
          {
            '--apply-btn-bg': '#230922'
          },
          {
            '--themes-head': '#fff'
          },
        ];

        for (let i = 0; i < unknownSpaceTheme.length; i++) {
          rootStyle.setProperty(Object.keys(unknownSpaceTheme[i])[0], Object.values(unknownSpaceTheme[i])[0]);
        };
        break;
      default:

        const defaultTheme = [
          //tasks
          {
            '--tasks-bg': `url(${tasksBg})`
          },
          {
            '--tasks-container-bg': '#fff'
          },
          {
            '--tasks-section-bg': '#fff'
          },
          {
            '--add-new-task-btn-bg': '#b2c574'
          },
          {
            '--add-new-task-btn-color': '#000'
          },
          {
            '--personalize-btn-bg': '#fec106'
          },
          {
            '--tasks-head-color': '#000'
          },
          {
            '--subtasks-head-color': '#000'
          },
          {
            '--tasks-details-bg': '#fff'
          },
          {
            '--tasks-details-color': '#000'
          },

          //add-task
          {
            '--add-task-container-bg': '#fff'
          },

          //edit-task
          {
            '--close-icon': '#000'
          },

          //themes
          {
            '--themes-bg': `#fcfcdf`
          },
          {
            '--apply-btn-bg': '#063970'
          },
          {
            '--themes-head': '#000'
          },
        ];

        for (let i = 0; i < defaultTheme.length; i++) {
          rootStyle.setProperty(Object.keys(defaultTheme[i])[0], Object.values(defaultTheme[i])[0]);
        }
    }
    setTimeout(() => {
      navigate('/');
    }, 200)
  }



  return (
    <div className='themes-bg'>
      <div className="themes-container">
        <div className="themes-head">
          <Row>
            <Col className='ant-col-24' md={8}></Col>
            <Col className='ant-col-24' md={8}>Themes</Col>
            <Col className='ant-col-24' md={8}><Button onClick={applyTheme} className='apl-btn'>Apply Now</Button></Col>
          </Row>
        </div>
        <div className="themes">
          <Row gutter={[30, 20]} className='themes-row'>
            {
              themes.map((theme, ind) => (
                <Col key={ind} className='ant-col-24' md={8}>
                  <div name={`tcard-${ind + 1}`} className="theme-card" onClick={() => selectTheme(theme)}>
                    <img className='image' src={theme.image} alt="" />
                  </div>
                  <div><h3>{theme.themeName}</h3></div>
                </Col>
              ))
            }
          </Row>
          {/* <Row className='apl-row'>
            <Col className='ant-col-24 apl-col' md={24}><Button onClick={applyTheme} className='apl-btn'>Apply Now</Button></Col>
          </Row> */}
        </div>
      </div>
    </div>
  );
};
export default Themes;