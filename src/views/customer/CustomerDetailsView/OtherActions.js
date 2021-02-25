import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {},
  deleteAction: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.dark
    }
  }
}));

const OtherActions = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Outras Ações" />
      <Divider />
      <CardContent>
        <Box
          display="flex"
          flexDirection="table"
          alignItems="flex-start"
        >
          <Button startIcon={<NotInterestedIcon />}>
            Fechar Conta
          </Button>
          <Button startIcon={<GetAppIcon />}>
            Exportar Dados
          </Button>
        </Box>
        <Box
          mt={1}
          mb={2}
        >
          <Typography
            variant="body2"
            color="textSecondary"
          >
            Remova os dados deste cliente se ele solicitou, se não, esteja 
            ciente de que o que foi excluído nunca poderá ser recuperado.
          </Typography>
        </Box>
        <Button
          className={classes.deleteAction}
          startIcon={<DeleteIcon />}
        >
          Deletar Conta
        </Button>
      </CardContent>
    </Card>
  );
};

OtherActions.propTypes = {
  className: PropTypes.string
};

export default OtherActions;
