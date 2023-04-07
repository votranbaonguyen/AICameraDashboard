package hcmute.oose.AICameraDashboardBE.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Objects;

public class JwtAccountDetails implements UserDetails {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    private final String email;

    private final String password;

    private final Collection<? extends GrantedAuthority> authorities;

    private final boolean trangThai;

    public JwtAccountDetails(String email,
                          String password, Collection<? extends GrantedAuthority> authorities, boolean trangThai) {
        this.email = email;
        this.password = password;
        this.authorities = authorities;
        this.trangThai = trangThai;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }
    
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return trangThai;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return trangThai;
    }
    
    @Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		JwtAccountDetails accountDetails = (JwtAccountDetails) o;
		return Objects.equals(this.email, accountDetails.email);
	}
}