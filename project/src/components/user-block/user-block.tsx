import { Link, useNavigate } from 'react-router-dom';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

function UserBlock(): JSX.Element {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ul className="user-block">
      { authorizationStatus === AuthorizationStatus.Auth ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
                onClick={() => navigate(AppRoute.MyList)}
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link to='' className="user-block__link" onClick={() => dispatch(logoutAction())}>
                    Sign out
            </Link>
          </li>
        </>
        :
        <li className="user-block__item">
          <Link to={APIRoute.login} className="user-block__link">
                    Sign in
          </Link>
        </li>}

    </ul>
  );
}

export default UserBlock;
