import {createTheme, PaletteColor, PaletteColorOptions} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import {grey} from "@mui/material/colors";
import RemoveIcon from '@mui/icons-material/Remove';
import {csCZ as dataGridCsCZ} from '@mui/x-data-grid/locales';
import {csCZ as coreCsCZ} from '@mui/material/locale';
import {csCZ} from '@mui/x-date-pickers/locales';
import type {} from '@mui/x-data-grid/themeAugmentation';
import CustomGridPagination from "../../components/libComponents/CustomGridPagination.tsx";
import {DATA_GRID_TEXTS} from "../../constants/textConstants.ts";

export const rbColorPalette = {
    colorPrimary: '#FEDF00',
    colorPrimaryHover: '#FFF30A',
    colorSecondary: '#6C757D',
    colorSecondaryHover: '#E5E5E5',
    colorDanger: '#EC2525',
    colorDangerHover: '#F80400',
    colorSuccess: '#4CAF50',
    colorSuccessHover: '#60C664',
    colorWarning: '#F89F2F',
    colorWarningHover: '#FFC107',
    colorInfo: '#4594e9',
    colorInfoHover: '#68ADF6',
    colorWhite: '#ffffff',
    colorWhiteDark: '#ffffffb3',
    colorBlack: '#000',
    colorBlackLight: '#000000b3',
    colorDark: "#151515",
    colorPrimaryBgText: "#433a12",
    colorSubtitles: '#4D4F53',
    colorFontsIconsGrey: '#707476',
    colorReadOnly: '#fafafa',
    colorGreyLight: '#f5f5f5',
    colorAppBackground: '#f5f5f5',
    colorInputReadOnlyBorder: '#00000042',
}

export type RBColorPalette = typeof rbColorPalette

// MUI interfaces for customization
declare module '@mui/material/styles' {
    // interface Theme {
    //
    // }
    //
    // interface ThemeOptions {
    //
    // }

    interface Palette {
        dark?: PaletteColor
        white?: PaletteColor
        black?: PaletteColor
        primaryBgText?: PaletteColor
        subtitles?: PaletteColor
        fontsIconsGrey?: PaletteColor
        readOnly?: PaletteColor
        inputReadOnlyBorder?: PaletteColor
        greyLight?: PaletteColor
        appBackground?: PaletteColor
    }

    interface PaletteOptions {
        dark?: PaletteColorOptions
        white?: PaletteColorOptions
        black?: PaletteColorOptions
        primaryBgText?: PaletteColorOptions
        subtitles?: PaletteColorOptions
        fontsIconsGrey?: PaletteColorOptions
        readOnly?: PaletteColorOptions
        inputReadOnlyBorder?: PaletteColorOptions
        greyLight?: PaletteColorOptions
        appBackground?: PaletteColorOptions
    }

    // interface SimplePaletteColorOptions {
    //     darker?: string
    // }
    //
    // interface PaletteColor {
    //     darker?: string
    // }
}

// helper functions
const changeDisabledButtonStyle = (variant: string, bgColor: string, textColor: string, border?: string) => {
    switch (variant) {
        case 'contained':
            return {
                backgroundColor: bgColor,
                color: textColor,
                opacity: 0.55
            }
        case 'outlined':
            return {
                color: textColor,
                border: `${border || '1px'} solid ${bgColor}`,
                opacity: 0.55
            }
        default:
            return {}
    }
}

const changeHoverButtonStyle = (variant: string, bgColor?: string, textColor?: string, border?: string) => {
    switch (variant) {
        case 'contained':
            return {
                backgroundColor: bgColor || '',
                color: textColor || '',
            }
        case 'outlined':
            return {
                backgroundColor: bgColor || '',
                color: textColor || '',
                border: `${border || '1px'} solid ${bgColor}`
            }
        default:
            return {}
    }
}

// RB theme customization
export const rbThemeMain = (colors: RBColorPalette = rbColorPalette) => createTheme({
    palette: {
        primary: {
            main: colors.colorPrimary,
            light: colors.colorPrimaryHover
        },
        secondary: {
            main: colors.colorSecondary,
            light: colors.colorSecondaryHover
        },
        success: {
            main: colors.colorSuccess,
            light: colors.colorSuccessHover
        },
        error: {
            main: colors.colorDanger,
            light: colors.colorDangerHover
        },
        info: {
            main: colors.colorInfo,
            light: colors.colorInfoHover
        },
        warning: {
            main: colors.colorWarning,
            light: colors.colorWarningHover
        },
        dark: {
            main: colors.colorDark
        },
        white: {
            main: colors.colorWhite,
            dark: colors.colorWhiteDark
        },
        black: {
            main: colors.colorBlack,
            light: colors.colorBlackLight
        },
        primaryBgText: {
            main: colors.colorPrimaryBgText
        },
        subtitles: {
            main: colors.colorSubtitles
        },
        fontsIconsGrey: {
            main: colors.colorFontsIconsGrey
        },
        readOnly: {
            main: colors.colorReadOnly
        },
        inputReadOnlyBorder: {
            main: colors.colorInputReadOnlyBorder
        },
        greyLight: {
            main: colors.colorGreyLight
        },
        appBackground: {
            main: colors.colorAppBackground
        },
    },
    shape: {
        borderRadius: 3
    },
    components: {
        MuiAlert: {
            defaultProps: {
                iconMapping: {
                    info: <InfoIcon/>,
                    success: <CheckCircleIcon/>,
                    error: <ErrorIcon/>,
                    warning: <WarningIcon/>
                },
            },
            styleOverrides: {
                root: {
                    color: colors.colorBlack
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: colors.colorDark,
                }
            }
        },
        MuiAvatar: {
            defaultProps: {
                sx: {
                    bgcolor: colors.colorPrimary,
                    color: colors.colorDark
                }
            }
        },
        MuiBadge: {
            defaultProps: {
                color: 'primary'
            }
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    '.Mui-selected': {
                        '.MuiBottomNavigationAction-label': {
                            color: colors.colorBlack
                        }
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButtonGroup: {
            defaultProps: {
                disableFocusRipple: true
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                color: 'primary',
                disableRipple: true,
                disableElevation: true,
                disableFocusRipple: true,
                disableTouchRipple: true
            },
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        opacity: 0.65
                    }
                },
                containedPrimary: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorPrimaryHover, colors.colorPrimaryBgText),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorPrimary, colors.colorPrimaryBgText)
                },
                outlinedPrimary: {
                    color: colors.colorPrimaryBgText,
                    border: `1.8px solid ${colors.colorPrimary}`,
                    '&:hover': changeHoverButtonStyle('outlined', colors.colorPrimaryHover, colors.colorPrimaryBgText),
                    '&.Mui-disabled': changeDisabledButtonStyle('outlined', colors.colorPrimary, colors.colorPrimaryBgText, '1.8px')
                },

                containedSecondary: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorSecondaryHover, colors.colorBlack),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorSecondary, colors.colorBlack)
                },
                outlinedSecondary: {
                    color: colors.colorBlack,
                    border: `2px solid ${colors.colorSecondaryHover}`,
                    '&:hover': changeHoverButtonStyle('outlined', colors.colorSecondaryHover, colors.colorBlack, '2px'),
                    '&.Mui-disabled': changeDisabledButtonStyle('outlined', colors.colorSecondaryHover, colors.colorBlack)
                },

                containedError: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorDangerHover),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorDanger, colors.colorWhite)
                },
                outlinedError: {
                    color: colors.colorDanger,
                    '&:hover': changeHoverButtonStyle('outlined', colors.colorDangerHover, colors.colorWhite),
                    '&.Mui-disabled': changeDisabledButtonStyle('outlined', colors.colorDanger, colors.colorDanger)
                },

                containedSuccess: {
                    color: colors.colorWhite,
                    '&:hover': changeHoverButtonStyle('contained', colors.colorSuccessHover),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorSuccess, colors.colorWhite)
                },
                outlinedSuccess: {
                    '&:hover': changeHoverButtonStyle('outlined', colors.colorSuccessHover, colors.colorWhite),
                    '&.Mui-disabled': changeDisabledButtonStyle('outlined', colors.colorSuccess, colors.colorSuccess)
                },

                containedWarning: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorWarningHover),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorWarning, colors.colorBlack)
                },
                outlinedWarning: {
                    color: colors.colorBlack,
                    '&:hover': changeHoverButtonStyle('outlined', colors.colorWarningHover, colors.colorBlack),
                    '&.Mui-disabled': changeDisabledButtonStyle('outlined', colors.colorWarning, colors.colorBlack)
                },

                containedInfo: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorInfoHover),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorInfo, colors.colorWhite)
                },
                outlinedInfo: {
                    '&:hover': changeHoverButtonStyle('outlined', colors.colorInfoHover, colors.colorWhite),
                    '&.Mui-disabled': changeDisabledButtonStyle('outlined', colors.colorInfo, colors.colorInfo)
                }
            }
        },
        MuiDataGrid: {
            defaultProps: {
                disableRowSelectionOnClick: true,
                pageSizeOptions: [5, 10, 25, 50, 100],
                autosizeOnMount: true,
                getRowHeight: () => 'auto',
                autosizeOptions: {
                    includeOutliers: true,
                    expand: true,
                    outliersFactor: 1.5
                },
                slots: {
                    pagination: CustomGridPagination
                },
                localeText: DATA_GRID_TEXTS.localeText,
                sx: {
                    '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {py: '10px'},
                    '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {py: '17px'},
                    '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {py: '24px'},
                }
            },
            styleOverrides: {
                root: {
                    '.MuiDataGrid-filler, .MuiDataGrid-scrollbarFiller, .MuiDataGrid-scrollbarFiller--header, .MuiDataGrid-columnHeaderCheckbox': {
                        backgroundColor: '#f5f5f5',
                    },
                    '.MuiDataGrid-columnHeader': {
                        backgroundColor: '#f5f5f5',
                        '.MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold'
                        }
                    },
                    '.MuiDataGrid-cell': {
                        display: 'flex',
                        alignItems: 'center',
                        wordBreak: 'break-word'
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    fontWeight: "bold",
                    color: colors.colorSubtitles,
                    backgroundColor: grey[100]
                }
            }
        },
        MuiDialogContent: {
            defaultProps: {
                dividers: true
            }
        },
        MuiDivider: {
            defaultProps: {
                variant: 'middle',
                className: 'grey'
            },
            styleOverrides: {
                root: {
                    '&.primary': {
                        backgroundColor: colors.colorPrimary,
                        borderColor: colors.colorPrimary
                    },
                    '&.dark': {
                        backgroundColor: colors.colorDark,
                        borderColor: colors.colorDark
                    },
                    '&.greyLight': {
                        backgroundColor: colors.colorGreyLight,
                        borderColor: colors.colorGreyLight
                    },
                    '&.grey': {
                        backgroundColor: '#CED4DA',
                        borderColor: '#CED4DA'
                    },
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: '#0009'
                    }
                }
            }
        },
        MuiCheckbox: {
            defaultProps: {
                checkedIcon: (
                    <div style={{
                        height: '24px',
                        width: '24px',
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            backgroundColor: colors.colorPrimary,
                            height: "18px",
                            width: "18px",
                            borderRadius: "3px",
                        }}>
                            <CheckIcon sx={{color: colors.colorPrimaryBgText, fontSize: "18px"}}/>
                        </div>
                    </div>
                ),
                indeterminateIcon: (
                    <div style={{
                        height: '24px',
                        width: '24px',
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            backgroundColor: colors.colorPrimary,
                            height: "18px",
                            width: "18px",
                            borderRadius: "3px",
                        }}>
                            <RemoveIcon sx={{color: colors.colorPrimaryBgText, fontSize: "18px"}}/>
                        </div>
                    </div>
                )
            },
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        opacity: 0.55
                    }
                },
            }
        },
        MuiChip: {
            styleOverrides: {
                colorPrimary: {
                    "&.MuiChip-clickable": {
                        '&:hover': changeHoverButtonStyle('contained', colors.colorPrimaryHover, colors.colorPrimaryBgText),
                        '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorPrimary, colors.colorPrimaryBgText)
                    }
                },
                outlinedPrimary: {
                    color: colors.colorPrimaryBgText,
                    "&.MuiChip-root .MuiChip-deleteIcon": {
                        color: colors.colorBlackLight,
                        "&:hover": {
                            color: colors.colorBlack
                        }
                    },
                },
                colorSecondary: {
                    color: colors.colorBlack,
                    "&.MuiChip-clickable": {
                        '&:hover': {
                            ...changeHoverButtonStyle('contained', colors.colorSecondaryHover, colors.colorBlack),
                            '.MuiChip-deleteIcon': {
                                color: colors.colorBlackLight,
                                '&:hover': {
                                    color: colors.colorBlack
                                }
                            }
                        },
                        '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorSecondary, colors.colorBlack),
                    }
                },
                colorSuccess: {
                    color: colors.colorWhite,
                    "&.MuiChip-outlined": {
                        color: colors.colorSuccess,
                        "&.MuiChip-root .MuiChip-deleteIcon": {
                            color: colors.colorSuccess,
                            "&:hover": {
                                color: colors.colorSuccessHover
                            }
                        },
                        "&.MuiChip-clickable": {
                            '&:hover': {
                                color: colors.colorWhite,
                                '.MuiChip-deleteIcon': {
                                    color: colors.colorWhiteDark,
                                    '&:hover': {
                                        color: colors.colorWhite
                                    }
                                }
                            },
                        }
                    },
                    "&.MuiChip-clickable": {
                        '&:hover': changeHoverButtonStyle('contained', colors.colorSuccessHover),
                        '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorSuccess, colors.colorWhite)
                    },
                    "&.MuiChip-root .MuiChip-deleteIcon": {
                        color: colors.colorWhiteDark,
                        "&:hover": {
                            color: colors.colorWhite
                        }
                    },
                },
                colorInfo: {
                    "&.MuiChip-clickable": {
                        '&:hover': changeHoverButtonStyle('contained', colors.colorInfoHover),
                        '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorInfo, colors.colorWhite)
                    },
                    "&.MuiChip-outlined": {
                        "&.MuiChip-clickable": {
                            '&:hover': {
                                color: colors.colorWhite,
                                '.MuiChip-deleteIcon': {
                                    color: colors.colorWhiteDark,
                                    '&:hover': {
                                        color: colors.colorWhite
                                    }
                                }
                            },
                        }
                    },
                },
                colorError: {
                    "&.MuiChip-clickable": {
                        '&:hover': changeHoverButtonStyle('contained', colors.colorDangerHover),
                        '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorDanger, colors.colorWhite)
                    },
                    "&.MuiChip-outlined": {
                        "&.MuiChip-clickable": {
                            '&:hover': {
                                color: colors.colorWhite,
                                '.MuiChip-deleteIcon': {
                                    color: colors.colorWhiteDark,
                                    '&:hover': {
                                        color: colors.colorWhite
                                    }
                                }
                            },
                        }
                    },
                },
                colorWarning: {
                    "&.MuiChip-clickable": {
                        '&:hover': changeHoverButtonStyle('contained', colors.colorWarningHover),
                        '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorWarning, colors.colorBlack)
                    },
                    "&.MuiChip-outlined": {
                        "&.MuiChip-clickable": {
                            '&:hover': {
                                color: colors.colorBlack,
                                '.MuiChip-deleteIcon': {
                                    color: colors.colorBlackLight,
                                    '&:hover': {
                                        color: colors.colorBlack
                                    }
                                }
                            },
                        }
                    },
                }
            }
        },
        MuiFab: {
            styleOverrides: {
                primary: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorPrimaryHover, colors.colorPrimaryBgText),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorPrimary, colors.colorPrimaryBgText)
                },
                secondary: {
                    '&:hover': changeHoverButtonStyle('contained', colors.colorSecondaryHover, colors.colorBlack),
                    '&.Mui-disabled': changeDisabledButtonStyle('contained', colors.colorSecondary, colors.colorBlack)
                },

            }
        },
        MuiIconButton: {
            defaultProps: {
                color: 'secondary'
            },
            styleOverrides: {
                colorSecondary: {
                    color: colors.colorPrimaryBgText,
                    '&:hover': {
                        backgroundColor: 'rgba(254, 223, 0, 0.3)'
                    }
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.MuiInputBase-root": {
                        "&.Mui-readOnly": {
                            "&.Mui-focused fieldset": {
                                border: `1px solid ${colors.colorInputReadOnlyBorder}`
                            }
                        }
                    }
                }
            }
        },
        MuiInputLabel: {
            defaultProps: {
                shrink: true
            },
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        color: colors.colorBlack
                    }
                }
            }
        },
        MuiLink: {
            defaultProps: {
                color: colors.colorSubtitles
            },
            styleOverrides: {
                root: {
                    '&:hover': {
                        color: colors.colorBlack
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: colors.colorFontsIconsGrey
                }
            }
        },
        MuiOutlinedInput: {
            defaultProps: {
                notched: true
            }
        },
        MuiPagination: {
            defaultProps: {
                shape: "rounded",
                color: 'primary',
                variant: 'outlined'
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                outlinedPrimary: {
                    '&.Mui-selected': {
                        color: colors.colorPrimaryBgText,
                        backgroundColor: colors.colorPrimary,
                        '&.Mui-selected:hover': {
                            color: colors.colorPrimaryBgText,
                            backgroundColor: colors.colorPrimaryHover
                        }
                    },
                },
                textPrimary: {
                    '&.Mui-selected': {
                        color: colors.colorPrimaryBgText,
                        backgroundColor: colors.colorPrimary,
                        '&.Mui-selected:hover': {
                            color: colors.colorPrimaryBgText,
                            backgroundColor: colors.colorPrimaryHover
                        }
                    },
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    '&.readOnly': {
                        backgroundColor: colors.colorReadOnly
                    },
                    '&.actionSection': {
                        boxShadow: '0px 60px 60px 0px rgba(0,0,0,0.1)'
                    }
                }
            }
        },
        MuiRadio: {
            defaultProps: {
                checkedIcon: (
                    <div style={{
                        height: '23px',
                        width: '23px',
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: colors.colorPrimary,
                        borderRadius: '50%'
                    }}>
                        <CircleIcon sx={{color: colors.colorPrimaryBgText, fontSize: "11px"}}/>
                    </div>
                )
            },
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        opacity: 0.55
                    }
                },
            }
        },
        MuiSnackbar: {
            defaultProps: {
                sx: {
                    "& .MuiSnackbarContent-root": {
                        background: colors.colorPrimary,
                        color: colors.colorPrimaryBgText
                    }
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                rail: {
                    color: colors.colorSecondary
                }
            }
        },
        MuiStepIcon: {
            styleOverrides: {
                root: {
                    "&.Mui-completed": {
                        color: colors.colorSuccess,
                    }
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                switchBase: {
                    // Controls default (unchecked) color for the thumb
                    color: colors.colorPrimary,
                    '&.Mui-disabled': {
                        color: colors.colorSecondaryHover,
                    }
                },
                colorPrimary: {
                    "&.Mui-checked": {
                        // Controls checked color for the thumb
                        color: colors.colorPrimaryHover,
                    }
                },
                track: {
                    backgroundColor: colors.colorSecondary,
                    ".Mui-checked.Mui-checked + &": {
                        backgroundColor: colors.colorPrimary
                    },
                }
            }
        },
        MuiTabs: {
            defaultProps: {
                indicatorColor: 'primary',
                textColor: 'inherit'
            }
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    shrink: true
                }
            }
        },
        MuiTooltip: {
            defaultProps: {
                arrow: true,
            },
            styleOverrides: {
                tooltip: {
                    backgroundColor: colors.colorPrimary,
                    color: colors.colorPrimaryBgText,
                },
                arrow: {
                    color: colors.colorPrimary
                }
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: '32px',
                    fontWeight: "bold",
                    marginBottom: '30px',
                    color: colors.colorBlack
                },
                h2: {
                    fontSize: '26px',
                    fontWeight: "bold",
                    marginBottom: '30px',
                    color: colors.colorSubtitles
                },
                h3: {
                    fontSize: '20px',
                    fontWeight: "bold",
                    marginBottom: '15px',
                    color: colors.colorSubtitles
                },
                h4: {
                    fontSize: '18px',
                    fontWeight: "bold",
                    color: colors.colorSubtitles
                },
                h5: {
                    fontSize: '16px',
                    fontWeight: "bold",
                    color: colors.colorFontsIconsGrey
                },
                h6: {
                    fontSize: '14px',
                    color: colors.colorFontsIconsGrey
                },
            }
        },
    }
}, csCZ, dataGridCsCZ, coreCsCZ)

document.documentElement.style.setProperty('--background-color', `${rbThemeMain().palette.appBackground?.main}`)