import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button/Button';

const BreadCrumb = (props: any) => {
    const { data } = props
    const navigate = useNavigate()
    const renderBreadCrumb = () => {
        return data?.length > 0 ? data?.map((element: any) => {
            return (
                <Button sx={{ color: "black" }} onClick={() => navigate(element.link)}>
                    {element.title}
                </Button>
            )
        }) : ''
    }
    return (
        <Stack spacing={2} style={{marginLeft:"10%"}}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {renderBreadCrumb()}
            </Breadcrumbs>
        </Stack>
    )
}

export default BreadCrumb