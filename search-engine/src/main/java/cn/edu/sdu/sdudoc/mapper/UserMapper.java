package cn.edu.sdu.sdudoc.mapper;

import cn.edu.sdu.sdudoc.pojo.User;
import java.util.List;

public interface UserMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbggenerated Mon Mar 29 22:30:42 CST 2021
     */
    int deleteByPrimaryKey(String uid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbggenerated Mon Mar 29 22:30:42 CST 2021
     */
    int insert(User record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbggenerated Mon Mar 29 22:30:42 CST 2021
     */
    User selectByPrimaryKey(String uid);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbggenerated Mon Mar 29 22:30:42 CST 2021
     */
    List<User> selectAll();

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user
     *
     * @mbggenerated Mon Mar 29 22:30:42 CST 2021
     */
    int updateByPrimaryKey(User record);
}