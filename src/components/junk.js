;<div className={style.metadata}>
  <motion.span variants={metaVariants} initial="catHidden" animate="visible">
    <em>{category}</em>
  </motion.span>
  <motion.div
    variants={metaVariants}
    initial="dateHidden"
    animate="visible"
    className={style.metadataInfo}
  >
    <span>{timeSince(new Date(createdAt))} ago</span>
    <Tooltip title="like" className={style.bookmarkIcon}>
      <Grid item container spacing={2} onClick={handleLike}>
        {isLike ? (
          <Favorite color="error" fontSize="medium" />
        ) : (
          <FavoriteBorder fontSize="medium" />
        )}
        <div className="gridBadge">{!isLike ? like : like + 1}</div>
      </Grid>
      {/* <Badge
                    badgeContent={!isLike ? like : like + 1}
                    color="primary"
                    className={style.badgeIcon}
                    onClick={handleLike}
                  >
                    {isLike ? (
                      <Favorite color="error" fontSize="medium" />
                    ) : (
                      <FavoriteBorder fontSize="medium" />
                    )}
                  </Badge> */}
    </Tooltip>
  </motion.div>
</div>
