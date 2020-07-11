import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {
    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACXCAMAAAAvQTlLAAAAY1BMVEX///8AAAD29vbHx8fm5ubx8fH5+fmAgIBTU1Pp6emnp6dPT0/e3t78/PzZ2dmYmJhjY2O+vr6ysrIwMDBKSkoKCgokJCQeHh4pKSk7OztERETT09OMjIxsbGyenp5xcXEYGBgs3MZiAAACyUlEQVR4nO3ZbcNyMBgG4GYYqs1bSqT+/6981ovSjWw2ni/n8bnNiWsX1mYDAAAAAAAAAAAAAAAAAACgiO/XPqIT+tM/SpLlg3zhdRJOXwpaOitkeXF2SXwWKvenItHiaV72tA5InihdhopkCrfanMejLSFHtlP7eViSetlAd17KZChCGsVUGy8gJFw00t6lIrtnIkGqPupKyGXJ28iba/kIRWKqsbqEHKBxFlrkyrvenplIxlydoVQOKVRvuRa58uI2FDlEescIj3JQbj3Tc+W96ZTVw/5yH2Z5NYYpyzuhyIVql694DKTWIvlhJY6HbqiMzVjr/DnWVpfgUbvy3qkarWJ/8Z41cPPMIzkuvRaH71CyrOa9pNTP4cbPbJ+K+G8mQq5zX1Gq1wRnk1yem8bHXibdbtXlx+0cs++jl9Z5PxMhp2h2qs0mfU8zK5dXNfnAhZItVPEtZoTzmVS/3fOIlUOZ7mVl2HXEZyqhM84PKStvI6FktzL8TgiLz2xn9VBy5Y1lkgu7Me84dXdCpceXI1de1m8H77IKEgtvS8735Z/s+G4iX8t/YXYeZs33rNtfp+rtxPb0M9SpNugLX4f6e/LByMR7nrLfmWR5RtZew6ve5Fnaazq+J1deMRCk63CmFh6vLTZ42ryTyU2aeOBHf1kqq9bwWi/yi0iklMVlphCqsFVWrf5tnGHbWN87aKaPOuEQ6HxzqRoqL61UrLIfSjZVlYoeZ72sWr3upSOIFtuSMsi1SFmZ5rotU1ZvM+tLLFRWHzPW49xvLi1iOse3vLL4EBy30wp1Ut14NDf16tJRLF9WH+l0nqd4tY3qB287HYlobjxawadDHWs+PY91U3fyoLyfbRkd/w4kpelHs4nqPFZVyYorcEjS27UqAkZX/8Ovz6+628axoLtV2rqikFfcXbshAAAAAAAAAAAAAAAAAADAf/cPlEAc2xtrHT4AAAAASUVORK5CYII=',
  
    width: '33.33%',
  },
  {
    url: 'data:image/png;base64,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',
    
    width: '33.33%',
  },
  {
    url: 'data:image/png;base64,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',
    
    width: '33.34%',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'banner',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
